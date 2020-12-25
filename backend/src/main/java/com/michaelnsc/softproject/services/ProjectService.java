package com.michaelnsc.softproject.services;

import com.michaelnsc.softproject.domain.User;
import com.michaelnsc.softproject.dto.UserDTO;
import com.michaelnsc.softproject.repository.ProjectRepository;
import com.michaelnsc.softproject.repository.UserRepository;
import com.michaelnsc.softproject.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private ProjectRepository projectRepository;

    public User findById(String id) {
        Optional<User> obj = projectRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado"));
    }
}
