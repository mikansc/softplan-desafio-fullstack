package com.michaelnsc.softproject.config;

import com.michaelnsc.softproject.domain.User;
import com.michaelnsc.softproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class Instantiation implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {

        userRepository.deleteAll();

        User admin = new User(null, "Administrador do Sistema", "admin","123456","admin@sistema.com");
        User triador = new User(null, "Triador de Projetos", "triador","123456","triador@sistema.com");
        User finalizador = new User(null, "Funcionário Padrão", "finalizador","123456","finalizador@sistema.com");

        userRepository.saveAll(Arrays.asList(admin, triador, finalizador));
    }
}
