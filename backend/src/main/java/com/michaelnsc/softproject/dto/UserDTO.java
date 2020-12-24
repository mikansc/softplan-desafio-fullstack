package com.michaelnsc.softproject.dto;

import com.michaelnsc.softproject.domain.User;

import java.io.Serializable;

public class UserDTO implements Serializable {

    private String id;
    private String displayName;
    private String username;

    public UserDTO(){}

    public UserDTO(User obj) {
        id = obj.getId();
        username = obj.getUsername();
        displayName = obj.getDisplayName();
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
}
