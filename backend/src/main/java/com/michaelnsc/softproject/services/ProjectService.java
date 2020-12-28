package com.michaelnsc.softproject.services;

import com.michaelnsc.softproject.domain.Project;
import com.michaelnsc.softproject.dto.ProjectDTO;
import com.michaelnsc.softproject.dto.ProjectUserDTO;
import com.michaelnsc.softproject.repository.ProjectRepository;
import com.michaelnsc.softproject.resources.exception.AuthorizationException;
import com.michaelnsc.softproject.security.UserSS;
import com.michaelnsc.softproject.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public ProjectService() {
    }

    public Project findById(String id) {
        Optional<Project> obj = projectRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado"));
    }

    public List<Project> findCreatedProjects() {
        UserSS authenticatedUser = UserService.authenticated();
        if (authenticatedUser == null) {
            throw new AuthorizationException("Acesso negado");
        }
        return projectRepository.findByCreatedById(authenticatedUser.getId());
    }

    public List<Project> findAssignedProjects() {
        UserSS authenticatedUser = UserService.authenticated();
        if (authenticatedUser == null) {
            throw new AuthorizationException("Acesso negado");
        }
        return projectRepository.findByAssignedToId(authenticatedUser.getId());
    }

    public Project insert(Project obj) {
        UserSS authenticatedUser = UserService.authenticated();
        if (authenticatedUser == null) {
            throw new AuthorizationException("Acesso negado");
        }
        ProjectUserDTO creator = new ProjectUserDTO(authenticatedUser.getId(), authenticatedUser.getDisplayName());
        obj.setCreated_by(creator);
        return projectRepository.insert(obj);
    }

    public Project update(Project obj) {
        Project newObj = findById(obj.getId());
        updateData(newObj, obj);
        return projectRepository.save(newObj);
    }

    private void updateData(Project newObj, Project obj) {
        newObj.setTitle(obj.getTitle());
        newObj.setBody(obj.getBody());
        newObj.setAssigned_to(obj.getAssigned_to());
        if (obj.getFinished()) {
            newObj.setFinished(true);
            newObj.setFinished_at(new Date());
        }
    }

    public void delete(String id) {
        findById(id);
        projectRepository.deleteById(id);
    }

    public Project fromDTO(ProjectDTO objDTO) {
        return new Project(objDTO.getId(), objDTO.getCreated_at(), objDTO.getFinished_at(), objDTO.getFinished(), objDTO.getTitle(), objDTO.getBody(), null, objDTO.getAssigned_to());
    }
}
