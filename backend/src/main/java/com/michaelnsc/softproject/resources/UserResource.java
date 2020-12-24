package com.michaelnsc.softproject.resources;

import com.michaelnsc.softproject.domain.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(value="/api/v1/users")
public class UserResource {

    @GetMapping
    public ResponseEntity<List<User>> findAll() {
        User michael = new User("1","Michael Nascimento", "michaelnsc","123456","michael.nsc@outlook.com");
        User ferna = new User("2","Fernando Souza", "souza.ferna","123456","michael.nsc@outlook.com");

        List<User> list = new ArrayList<>();
        list.addAll(Arrays.asList(michael, ferna));

        return ResponseEntity.ok().body(list);

    }
}
