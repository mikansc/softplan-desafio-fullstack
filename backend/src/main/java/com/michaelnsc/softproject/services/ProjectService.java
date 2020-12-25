package com.michaelnsc.softproject.services;

import com.michaelnsc.softproject.domain.Project;
import com.michaelnsc.softproject.repository.ProjectRepository;
import com.michaelnsc.softproject.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project findById(String id) {
        Optional<Project> obj = projectRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado"));
    }
}
