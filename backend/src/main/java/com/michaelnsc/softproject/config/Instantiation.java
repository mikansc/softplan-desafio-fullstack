package com.michaelnsc.softproject.config;

import com.michaelnsc.softproject.domain.Project;
import com.michaelnsc.softproject.domain.User;
import com.michaelnsc.softproject.dto.ProjectUserDTO;
import com.michaelnsc.softproject.repository.ProjectRepository;
import com.michaelnsc.softproject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.TimeZone;

@Configuration
public class Instantiation implements CommandLineRunner {

    @Autowired
    private BCryptPasswordEncoder encPwd;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public void run(String... args) throws Exception {

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        sdf.setTimeZone(TimeZone.getTimeZone("GMT"));

        userRepository.deleteAll();
        projectRepository.deleteAll();

        User admin = new User(null, "Administrador do Sistema", "admin",encPwd.encode("123456"),"admin@sistema.com");
        User triador = new User(null, "Triador de Projetos", "triador",encPwd.encode("123456"),"triador@sistema.com");
        User finalizador = new User(null, "Funcionário Padrão", "finalizador",encPwd.encode("123456"),"finalizador@sistema.com");

        userRepository.saveAll(Arrays.asList(admin, triador, finalizador));

        Project projeto1 = new Project(null, sdf.parse("21/03/2020"), null, false, "Projeto de teste", "Escreva o parecer...", new ProjectUserDTO(triador), new ProjectUserDTO(finalizador));
        Project projeto2 = new Project(null, sdf.parse("22/03/2020"), sdf.parse("24/04/2020"), true, "Mais um projeto", "Eu acho que vai dar certo", new ProjectUserDTO(triador), new ProjectUserDTO(finalizador));

        projectRepository.saveAll(Arrays.asList(projeto1, projeto2));

        triador.getOwn_projects().addAll(Arrays.asList(projeto1, projeto2));
        userRepository.save(triador);

        finalizador.getAssigned_projects().addAll(Arrays.asList(projeto1, projeto2));
        userRepository.save(finalizador);
    }
}
