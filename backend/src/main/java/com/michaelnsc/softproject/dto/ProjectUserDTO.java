package com.michaelnsc.softproject.dto;

import com.michaelnsc.softproject.domain.User;

import java.io.Serializable;

public class ProjectUserDTO implements Serializable {
    private String id;
    private String displayName;

    public ProjectUserDTO() {
    }

    public ProjectUserDTO(User obj) {
        id = obj.getId();
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
}
