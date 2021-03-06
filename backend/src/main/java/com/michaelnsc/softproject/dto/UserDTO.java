package com.michaelnsc.softproject.dto;

import com.michaelnsc.softproject.domain.User;
import com.michaelnsc.softproject.domain.enums.Role;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class UserDTO implements Serializable {

    private String id;
    private String displayName;
    private String username;
    private String email;
    private Set<Role> roles = new HashSet<>();


    public UserDTO() {
    }

    public UserDTO(User obj) {
        id = obj.getId();
        username = obj.getUsername();
        displayName = obj.getDisplayName();
        email = obj.getEmail();
        roles = obj.getRoles();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Role> getRoles() {
        return roles;
    }

}
