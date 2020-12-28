package com.michaelnsc.softproject.dto;

import com.michaelnsc.softproject.domain.User;

import java.io.Serializable;

public class ProjectUserDTO implements Serializable {
    private String id;
    private String name;

    public ProjectUserDTO() {
    }

    public ProjectUserDTO(User obj) {
        id = obj.getId();
        name = obj.getDisplayName();
    }

    public ProjectUserDTO(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDisplayName() {
        return name;
    }

    public void setDisplayName(String displayName) {
        this.name = displayName;
    }
}
