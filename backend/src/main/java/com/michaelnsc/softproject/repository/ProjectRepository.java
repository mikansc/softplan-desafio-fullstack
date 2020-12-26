package com.michaelnsc.softproject.repository;

import com.michaelnsc.softproject.domain.Project;
import com.michaelnsc.softproject.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends MongoRepository<Project, String> {

    List<Project> findByUser(User user);
}
