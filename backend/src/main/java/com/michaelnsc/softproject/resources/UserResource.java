package com.michaelnsc.softproject.resources;

import com.michaelnsc.softproject.domain.Project;
import com.michaelnsc.softproject.domain.User;
import com.michaelnsc.softproject.dto.ProjectUserDTO;
import com.michaelnsc.softproject.dto.UserDTO;
import com.michaelnsc.softproject.dto.UserNewDTO;
import com.michaelnsc.softproject.security.UserSS;
import com.michaelnsc.softproject.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/v1/users")
public class UserResource {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/profile")
    public ResponseEntity<User> getAuthenticated() {
        User obj = userService.getAuthenticatedUser();
        return ResponseEntity.ok().body(obj);
    }

    @PreAuthorize("hasAnyRole('ADMIN') or hasAnyRole('MANAGER')")
    @GetMapping
    public ResponseEntity<List<UserDTO>> findAll() {
        List<User> list = userService.findAll();
        List<UserDTO> listDto = list.stream().map(UserDTO::new).collect(Collectors.toList());
        return ResponseEntity.ok().body(listDto);
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @GetMapping(value = "/{id}")
    public ResponseEntity<UserNewDTO> findById(@PathVariable String id) {
        User obj = userService.findById(id);
        return ResponseEntity.ok().body(new UserNewDTO(obj));
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @PostMapping
    public ResponseEntity<Void> insert(@RequestBody UserNewDTO objDTO) {
        User obj = userService.fromDTO(objDTO);
        obj = userService.insert(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasAnyRole('ADMIN')")
    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> update(@RequestBody UserNewDTO objDTO, @PathVariable String id) {
        User obj = userService.fromDTO(objDTO);
        obj.setId(id);
        obj = userService.update(obj);
        return ResponseEntity.noContent().build();
    }
}
