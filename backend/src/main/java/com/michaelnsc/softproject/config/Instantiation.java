package com.michaelnsc.softproject.config;

import com.michaelnsc.softproject.domain.Project;
import com.michaelnsc.softproject.domain.User;
import com.michaelnsc.softproject.domain.enums.Role;
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

        User admin = new User(null, "Administrador do Sistema", "admin", encPwd.encode("123456"), "admin@sistema.com");
        admin.addRole(Role.ADMIN);

        User triador1 = new User(null, "Triador de Projetos Um", "triador1", encPwd.encode("123456"), "triador@sistema.com");
        triador1.addRole(Role.MANAGER);

        User triador2 = new User(null, "Triador de Projetos Dois", "triador2", encPwd.encode("123456"), "triador@sistema.com");
        triador2.addRole(Role.MANAGER);

        User finalizador1 = new User(null, "Funcionário Padrão Um", "finalizador1", encPwd.encode("123456"), "finalizador@sistema.com");
        User finalizador2 = new User(null, "Funcionário Padrão Dois", "finalizador2", encPwd.encode("123456"), "finalizador@sistema.com");


        userRepository.saveAll(Arrays.asList(admin, triador1, triador2, finalizador1, finalizador2));

        Project projeto1 = new Project(null, sdf.parse("21/03/2020"), null, false, "Projeto Um", "Do triador 1 para o finalizador 1", new ProjectUserDTO(triador1), new ProjectUserDTO(finalizador1));
        Project projeto2 = new Project(null, sdf.parse("22/03/2020"), null, false, "Projeto Dois", "Do triador 1 para o finalizador 2", new ProjectUserDTO(triador1), new ProjectUserDTO(finalizador2));
        Project projeto3 = new Project(null, sdf.parse("22/03/2020"), sdf.parse("24/04/2020"), true, "Projeto Tres", "Do triador 1 para o finalizador 1", new ProjectUserDTO(triador1), new ProjectUserDTO(finalizador1));
        Project projeto4 = new Project(null, sdf.parse("24/03/2020"), null, false, "Projeto Quatro", "Do triador 1 para o finalizador 2", new ProjectUserDTO(triador1), new ProjectUserDTO(finalizador2));
        Project projeto5 = new Project(null, sdf.parse("07/10/2020"), null, false, "Projeto Cinco", "Do triador 2 para o finalizador 2", new ProjectUserDTO(triador2), new ProjectUserDTO(finalizador2));
        Project projeto6 = new Project(null, sdf.parse("08/10/2020"), sdf.parse("09/10/2020"), true, "Projeto Seis", "Do triador 1 para o finalizador 1", new ProjectUserDTO(triador1), new ProjectUserDTO(finalizador1));
        Project projeto7 = new Project(null, sdf.parse("11/11/2020"), null, false, "Projeto Sete", "Do triador 2 para o finalizador 1", new ProjectUserDTO(triador2), new ProjectUserDTO(finalizador1));
        Project projeto8 = new Project(null, sdf.parse("01/12/2020"), sdf.parse("07/12/2020"), true, "Projeto Oito", "Do triador 2 para o finalizador 2", new ProjectUserDTO(triador2), new ProjectUserDTO(finalizador2));

        projectRepository.saveAll(Arrays.asList(projeto1, projeto2, projeto3, projeto4, projeto5, projeto6, projeto7, projeto8));

        triador1.getOwn_projects().addAll(Arrays.asList(projeto1, projeto2, projeto3, projeto4, projeto6));
        userRepository.save(triador1);

        triador2.getOwn_projects().addAll(Arrays.asList(projeto5, projeto7, projeto8));
        userRepository.save(triador2);

        finalizador1.getAssigned_projects().addAll(Arrays.asList(projeto1, projeto3, projeto6, projeto7));
        userRepository.save(finalizador1);

        finalizador2.getAssigned_projects().addAll(Arrays.asList(projeto2, projeto4, projeto5, projeto8));
        userRepository.save(finalizador2);
    }
}
