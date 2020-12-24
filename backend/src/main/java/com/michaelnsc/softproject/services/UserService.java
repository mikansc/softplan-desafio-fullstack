package com.michaelnsc.softproject.services;

import com.michaelnsc.softproject.domain.User;
import com.michaelnsc.softproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> findAll(){
        return userRepository.findAll();
    };

}
