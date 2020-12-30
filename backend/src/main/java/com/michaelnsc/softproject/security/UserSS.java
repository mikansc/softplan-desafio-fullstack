package com.michaelnsc.softproject.security;

import com.michaelnsc.softproject.domain.enums.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

public class UserSS implements UserDetails {

    private final String id;
    private final String username;
    private final String displayName;
    private final String password;
    private final Collection<? extends GrantedAuthority> authorities;

    public UserSS(String id, String username, String displayName, String password, Set<Role> roles) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.displayName = displayName;
        this.authorities = roles.stream().map(x -> new SimpleGrantedAuthority(x.getDescription())).collect(Collectors.toSet());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    public String getDisplayName() {
        return displayName;
    }

    public String getId() {
        return id;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public boolean hasRole(Role role) {
        return getAuthorities().contains(new SimpleGrantedAuthority(role.getDescription()));
    }
}
