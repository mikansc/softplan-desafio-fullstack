package com.michaelnsc.softproject.repository;

import com.michaelnsc.softproject.domain.Project;
import com.michaelnsc.softproject.domain.User;
import com.michaelnsc.softproject.dto.ProjectUserDTO;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends MongoRepository<Project, String> {

    @Query("{\"created_by._id\": ObjectId('?0')}")
    List<Project> findByCreatedById(String id);

    @Query("{\"assigned_to._id\": ObjectId('?0')}")
    List<Project> findByAssignedToId(String id);

}
