package com.michaelnsc.softproject.resources;

import com.michaelnsc.softproject.domain.Project;
import com.michaelnsc.softproject.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/projects")
public class ProjectResource {

    @Autowired
    private ProjectService projectService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<Project> findById(@PathVariable String id) {
        Project obj = projectService.findById(id);
        return ResponseEntity.ok().body(obj);
    }
}
