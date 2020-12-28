package com.michaelnsc.softproject.services;

import com.michaelnsc.softproject.domain.Project;
import com.michaelnsc.softproject.domain.User;
import com.michaelnsc.softproject.dto.ProjectDTO;
import com.michaelnsc.softproject.dto.ProjectUserDTO;
import com.michaelnsc.softproject.repository.ProjectRepository;
import com.michaelnsc.softproject.repository.UserRepository;
import com.michaelnsc.softproject.resources.exception.AuthorizationException;
import com.michaelnsc.softproject.security.UserSS;
import com.michaelnsc.softproject.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

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

    public Project fromDTO(ProjectDTO objDTO) {
        return new Project(objDTO.getId(), objDTO.getCreated_at(), null, false, objDTO.getTitle(), objDTO.getBody(), null, objDTO.getAssigned_to());
    }
}
