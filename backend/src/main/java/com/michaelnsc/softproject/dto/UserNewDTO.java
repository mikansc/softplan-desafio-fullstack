package com.michaelnsc.softproject.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.michaelnsc.softproject.domain.User;
import com.michaelnsc.softproject.domain.enums.Role;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class UserNewDTO implements Serializable {

    private String id;
    private String displayName;
    private String username;
    @JsonIgnore
    private String password;
    private String email;
    private Set<Role> roles;
    private Role selectedRole;


    public UserNewDTO() {
    }

    public UserNewDTO(User obj) {
        id = obj.getId();
        username = obj.getUsername();
        displayName = obj.getDisplayName();
        password = obj.getPassword();
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public Role getSelectedRole() {
        return selectedRole;
    }

    public void setSelectedRole(Role selectedRole) {
        this.selectedRole = selectedRole;
    }
}
