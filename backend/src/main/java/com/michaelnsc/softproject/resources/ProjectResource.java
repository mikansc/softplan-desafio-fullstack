package com.michaelnsc.softproject.resources;

import com.michaelnsc.softproject.domain.Project;
import com.michaelnsc.softproject.domain.User;
import com.michaelnsc.softproject.dto.ProjectDTO;
import com.michaelnsc.softproject.dto.UserDTO;
import com.michaelnsc.softproject.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/projects")
public class ProjectResource {

    @Autowired
    private ProjectService projectService;

    @GetMapping(value = "/{projectid}")
    public ResponseEntity<Project> findById(@PathVariable String projectid) {
        Project obj = projectService.findById(projectid);
        return ResponseEntity.ok().body(obj);
    }

    @PreAuthorize("hasAnyRole('ADMIN') or hasAnyRole('MANAGER')")
    @GetMapping(value = "/my-projects")
    public ResponseEntity<List<Project>> findAssignedProjects() {
        List<Project> obj = projectService.findAssignedProjects();
        return ResponseEntity.ok().body(obj);
    }

    @GetMapping(value = "/all-projects")
    public ResponseEntity<List<Project>> findCreatedProjects() {
        List<Project> obj = projectService.findCreatedProjects();
        return ResponseEntity.ok().body(obj);
    }

    @PreAuthorize("hasAnyRole('ADMIN') or hasAnyRole('MANAGER')")
    @PostMapping
    public ResponseEntity<Void> insert(@RequestBody ProjectDTO projObjDTO) {
        Project obj = projectService.fromDTO(projObjDTO);
        obj = projectService.insert(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PreAuthorize("hasAnyRole('ADMIN') or hasAnyRole('MANAGER')")
    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> update(@RequestBody ProjectDTO objDTO, @PathVariable String id) {
        Project obj = projectService.fromDTO(objDTO);
        obj.setId(id);
        obj = projectService.update(obj);
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasAnyRole('ADMIN') or hasAnyRole('MANAGER')")
    @DeleteMapping(value = "/{projectId}")
    public ResponseEntity<Void> delete(@PathVariable String projectId) {
        projectService.delete(projectId);
        return ResponseEntity.noContent().build();
    }
}
