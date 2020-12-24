package com.michaelnsc.softproject.repository;

import com.michaelnsc.softproject.domain.Project;
import com.michaelnsc.softproject.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends MongoRepository<Project, String> {
}
