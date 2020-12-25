package com.michaelnsc.softproject.domain;

import com.michaelnsc.softproject.dto.ProjectUserDTO;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.Objects;

@Document
public class Project {

    @Id
    private String id;
    private Date created_at;
    private Date finished_at;
    private Boolean finished;
    private String title;
    private String body;
    private ProjectUserDTO created_by;
    private ProjectUserDTO assigned_to;

    public Project() {
    }

    public Project(String id, Date created_at, Date finished_at, Boolean finished, String title, String body, ProjectUserDTO created_by, ProjectUserDTO assigned_to) {
        this.id = id;
        this.created_at = created_at;
        this.finished_at = finished_at;
        this.finished = finished;
        this.title = title;
        this.body = body;
        this.created_by = created_by;
        this.assigned_to = assigned_to;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Project project = (Project) o;
        return id.equals(project.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
