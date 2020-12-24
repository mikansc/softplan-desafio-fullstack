package com.michaelnsc.softproject.services;

import com.michaelnsc.softproject.domain.User;
import com.michaelnsc.softproject.dto.UserDTO;
import com.michaelnsc.softproject.repository.UserRepository;
import com.michaelnsc.softproject.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(String id) {
        Optional<User> obj = userRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado"));
    }

    public User insert(User obj) {
        return userRepository.insert(obj);
    }

    public void delete(String id) {
        findById(id);
        userRepository.deleteById(id);
    }


    public User update(User obj) {
        User newObj = findById(obj.getId());
        updateData(newObj, obj);
        return userRepository.save(newObj);
    }

    private void updateData(User newObj, User obj) {
        newObj.setDisplayName(obj.getDisplayName());
        newObj.setEmail(obj.getEmail());
        newObj.setUsername(obj.getUsername());
        newObj.setPassword(obj.getPassword());
    }

    public User fromDTO(UserDTO objDTO) {
        return new User(objDTO.getId(), objDTO.getDisplayName(), objDTO.getUsername(), objDTO.getPassword(), objDTO.getEmail());
    }

}
