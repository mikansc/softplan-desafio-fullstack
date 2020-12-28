package com.michaelnsc.softproject.dto;

import com.michaelnsc.softproject.domain.Project;

import java.io.Serializable;
import java.util.Date;

public class ProjectDTO implements Serializable {
    private String id;
    private Date created_at = new Date();
    private Date finished_at = null;
    private Boolean finished = false;
    private String title;
    private String body;
    private ProjectUserDTO created_by;
    private ProjectUserDTO assigned_to;

    public ProjectDTO() {
    }

    public ProjectDTO(Project obj) {
        id = obj.getId();
        finished = obj.getFinished();
        title = obj.getTitle();
        body = obj.getBody();
        created_by = obj.getCreated_by();
        assigned_to = obj.getAssigned_to();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getFinished_at() {
        return finished_at;
    }

    public void setFinished_at(Date finished_at) {
        this.finished_at = finished_at;
    }

    public Boolean getFinished() {
        return finished;
    }

    public void setFinished(Boolean finished) {
        this.finished = finished;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public ProjectUserDTO getCreated_by() {
        return created_by;
    }

    public void setCreated_by(ProjectUserDTO created_by) {
        this.created_by = created_by;
    }

    public ProjectUserDTO getAssigned_to() {
        return assigned_to;
    }

    public void setAssigned_to(ProjectUserDTO assigned_to) {
        this.assigned_to = assigned_to;
    }
}
