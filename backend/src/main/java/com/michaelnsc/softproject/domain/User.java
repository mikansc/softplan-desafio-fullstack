package com.michaelnsc.softproject.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.michaelnsc.softproject.domain.enums.Role;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.*;
import java.util.stream.Collectors;

@Document(collection = "users")
public class User implements Serializable {

    @Id
    private String id;
    private String displayName;
    private String username;
    private String email;
    private Set<Integer> roles = new HashSet<>();

    @JsonIgnore
    private String password;

    @DBRef(lazy = true)
    private List<Project> own_projects = new ArrayList<>();

    @DBRef(lazy = true)
    private List<Project> assigned_projects = new ArrayList<>();

    public User(String id, String displayName, String username, String password, String email) {
        this.id = id;
        this.displayName = displayName;
        this.username = username;
        this.password = password;
        this.email = email;
        addRole(Role.FINISHER);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id.equals(user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
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

    public Set<Role> getRoles(){
        return roles.stream().map(x -> Role.toEnum(x)).collect(Collectors.toSet());
    };

    public void addRole(Role role){
        roles.add(role.getCod());
    };

    public List<Project> getOwn_projects() {
        return own_projects;
    }

    public void setOwn_projects(List<Project> own_projects) {
        this.own_projects = own_projects;
    }

    public List<Project> getAssigned_projects() {
        return assigned_projects;
    }

    public void setAssigned_projects(List<Project> assigned_projects) {
        this.assigned_projects = assigned_projects;
    }
}
