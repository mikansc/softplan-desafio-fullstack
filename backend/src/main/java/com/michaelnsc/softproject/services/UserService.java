package com.michaelnsc.softproject.services;

import com.michaelnsc.softproject.domain.User;
import com.michaelnsc.softproject.domain.enums.Role;
import com.michaelnsc.softproject.dto.UserDTO;
import com.michaelnsc.softproject.repository.UserRepository;
import com.michaelnsc.softproject.security.UserSS;
import com.michaelnsc.softproject.services.exception.AuthorizationException;
import com.michaelnsc.softproject.services.exception.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private BCryptPasswordEncoder encPwd;

    @Autowired
    private UserRepository userRepository;

    public static UserSS authenticated() {
        try {
            return (UserSS) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        } catch (Exception err) {
            return null;
        }
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(String id) {
        UserSS user = UserService.authenticated();
        if (user == null || !user.hasRole(Role.ADMIN)) {
            throw new AuthorizationException("Você não tem autorização para fazer esta operação.");
        }
        Optional<User> obj = userRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Usuário não encontrado."));
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
        return new User(objDTO.getId(), objDTO.getDisplayName(), objDTO.getUsername(), encPwd.encode(objDTO.getPassword()), objDTO.getEmail());
    }
}
