package com.michaelnsc.softproject.config;

import com.michaelnsc.softproject.domain.Project;
import com.michaelnsc.softproject.domain.User;
import com.michaelnsc.softproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.TimeZone;

@Configuration
public class Instantiation implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        sdf.setTimeZone(TimeZone.getTimeZone("GMT"));

        userRepository.deleteAll();

        User admin = new User(null, "Administrador do Sistema", "admin","123456","admin@sistema.com");
        User triador = new User(null, "Triador de Projetos", "triador","123456","triador@sistema.com");
        User finalizador = new User(null, "Funcionário Padrão", "finalizador","123456","finalizador@sistema.com");

        Project projeto1 = new Project(null, sdf.parse("21/03/2020"), null, false, "Projeto de teste", "Escreva o parecer..." );
        Project projeto2 = new Project(null, sdf.parse("22/03/2020"), sdf.parse("24/04/2020"), true, "Mais um projeto", "Eu acho que vai dar certo" );

        userRepository.saveAll(Arrays.asList(admin, triador, finalizador));
    }
}
