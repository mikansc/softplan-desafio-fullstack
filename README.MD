<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/mikansc/softplan-desafio-fullstack-michael-nascimento">
  <a href="https://github.com/mikansc/softplan-desafio-fullstack-michael-nascimento/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/mikansc/softplan-desafio-fullstack-michael-nascimento">
  </a>
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>
<h1 align="center">
    <img alt="SIPROJ" title="#Siproj" src="./github/logo-siproj.png" />
</h1>
<p align="center">
SIPROJ é um projeto baseado no desafio <a href="#">Softplan FullStack Developer</a>
</p>
<p align="center">
<img alt="Made With ReactJS" src="https://img.shields.io/static/v1?label=React%20JS&message=%20&color=61DAFB&style=flat-square&logo=react">
  </p>
<p align="center">
<a href="#-sobre-o-projeto">Sobre</a> •
<a href="#-minha-experiencia">Minha experiência</a> •
<a href="#-funcionalidades">Funcionalidades</a> •
<a href="#-como-executar-o-projeto">Como executar</a> •
<a href="#-tecnologias">Tecnologias</a> •
<a href="#-autor">Autor</a> •

</p>

---

<p style="margin-top: 20px">

## ☕ Sobre o projeto

O SIPROJ é uma solução criada a partir de um desafio dado pela Softplan para o processo seletivo de Fullstack Developer.

O objetivo era criar um sistema de gerenciamento de projetos com cadastro de usuários e autorizações, cadastro de projetos e cadastro de parecer de projeto.

O Backend deveria ser feito em Java, e o frontend preferencialmente em ReactJS.

Para acessar o projeto:

| usuario      | senha  | perfil        |
| ------------ | ------ | ------------- |
| admin        | 123456 | Administrador |
| triador1     | 123456 | Triador       |
| triador2     | 123456 | Triador       |
| finalizador1 | 123456 | Triador       |
| finalizador2 | 123456 | Triador       |

<p style="margin-top: 20px">

## ⚜ Minha experiência

Como eu nunca havia tido contato com a linguagem Java, busquei focar o aprendizado no que eu precisava para realizar as operações que eram exigidas pelo programa. Meu objetivo era fazer uma implementação básica, já que eu já sabia que não conseguiria cobrir 100% das feats pedidas no desafio.

Durante o desenvolvimento, acabei criando afinidade com a lingua, e aproveitei pra me aprofundar mais em vários pontos, o que resultou em um backend muito próximo das exigencias do desafio.

O Frontend foi desenvolvido com ReactJS. Apliquei uma nova forma de instanciar o Axios para as requisições HTTP, baseado no aprendizado que tive com o modelo orientado a objetos do Java. Alguns componentes foram feitos com abordagem de TDD. Pretendo incluir mais testes com o tempo.

Independentemente do resultado do processo, saio deste desafio com a sensação de ter aprendido muitas coisas que vão me transformar em um programador muito melhor do que quando entrei.

<p style="margin-top: 20px">

### 👉 Pontos em destaque

- Desenvolvimento com arquitetura de domínio, repositório, recurso e serviço
- Utilização da arquitetura de DTO (Data Transfer Object) para manipulação dos dados das entidades
- Autenticação com utilização de estratégia JWT (Json Web Token)
- Gerenciamento de perfil (role) com o Spring Security
- Persistencia de dados com MongDB
- Uso de classes para instanciar o Axios no front-end

<p style="margin-top: 20px">

## ⚙ Funcionalidades

<p style="margin-top: 20px">

Algumas funcionalidades ainda não foram implementadas, mas pretendo continuar trabalhando no sistema.

<p style="margin-top: 20px">

✅ O Administrador do sistema pode:

| Backend | Frontend | Feature                            |
| :-----: | :------: | :--------------------------------- |
|   [✔]   |   [✔]    | Visualizar os usuários cadastrados |
|   [✔]   |   [✔]    | Criar novo usuário                 |
|   [✔]   |   [✔]    | Alterar usuário cadastrado         |
|   [✔]   |   [✔]    | Excluir usuário                    |

✅ O Triador pode:

| Backend | Frontend | Feature                                    |
| :-----: | :------: | :----------------------------------------- |
|   [✔]   |   [ ]    | Visualizar os projetos cadastrados por ele |
|   [✔]   |   [ ]    | Criar novo projeto e atribuir a um usuário |
|   [✔]   |   [ ]    | Atualizar o projeto criado por ele         |
|   [✔]   |   [ ]    | Excluir projeto                            |

✅ O Finalizador pode:

| Backend | Frontend | Feature                                 |
| :-----: | :------: | :-------------------------------------- |
|   [✔]   |   [ ]    | Visualizar os projetos atribuidos a ele |
|   [✔]   |   [ ]    | Cadastrar parecer ao projeto            |

---

<p style="margin-top: 40px">

## 🔌 Como executar o projeto

Este projeto é composto por um servidor com Spring Boot, persistência de dados com MongoDB e ReactJS no front-end.

Para que ele seja executado corretamente, você precisará ter o Maven e o Java em sua máquina, bem como o MongoDB instalado localmente ou uma conta no serviço web.

- <a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html">Para instalar o Java, siga estes passos.</a>
- <a href="https://maven.apache.org/install.html">Para instalar o Maven, siga estes passos.</a>
- <a href="https://docs.mongodb.com/manual/installation/">Para instalar o MongoDB localmente, siga estes passos.</a>

####

<p style="margin-top: 20px">

```bash

# Clonar o repositório
$ git clone https://github.com/mikansc/softplan-desafio-fullstack-michael-nascimento.git

# Acessar a pasta do projeto
$ cd softplan-desafio-fullstack-michael-nascimento

# ---- BACK END ----

# Acessar a pasta backend
$ cd backend

# Você precisará alterar o arquivo src/main/resources/application.properties
# para incluir o local onde seu banco de dados MongoDB está sendo executado:
spring.data.mongodb.uri=mongodb://localhost:27017/soft_project

# execute o comando de build do Maven na pasta backend
$ mvn install

# caso use o MongoDB localmente, primeiramente inicie o banco
# (você pode abrir um novo terminal para isso)
$ mongod

# após a build finalizar, execute o server
$ java -jar target/softproject-0.0.1-SNAPSHOT.jar

# ---- FRONT END ----

# Acessar a pasta frontend a partir da pasta raiz
$ cd frontend

# Instalar as dependências
$ npm install

# Executar a aplicação em modo de desenvolvimento
$ npm start

# O comando de rodar em desenvolvimento roda o servidor e o front-end
# O aplicativo inciará na porta:3000 - acesse http://localhost:3000
# O servidor inciará na porta:8080

```

---

<p style="margin-top: 20px">

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Front-end**

- **[React Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
- **[Axios](https://github.com/axios/axios)**
- **[Redux](https://redux.js.org/)**
- **[React Redux](https://react-redux.js.org/)**
- **[Redux Thunk](https://github.com/reduxjs/redux-thunk)**
- **[Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension)**
- **[Styled Components](https://styled-components.com/)**

#### **Server**

- **[Spring Boot](https://spring.io/projects/spring-boot)**

#### **Banco de Dados**

- **[Mongo DB](https://www.mongodb.com/)**

> Veja o arquivo [package.json](https://github.com/mikansc/softplan-desafio-fullstack-michael-nascimento/blob/main/frontend/package.json)

<p style="margin-top: 20px">

---

<p style="margin-top: 20px">

## ✋ Autor

<a href="https://www.linkedin.com/in/michaelnsc/">
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/35317401?s=460&u=53f0a76fbf41bafa9f776c73d87ba73aefe0ff62&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Michael Nascimento</b></sub></a> <a href="https://www.linkedin.com/in/michaelnsc/" title="Michael Nascimento"></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Michael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/michaelnsc/)](https://www.linkedin.com/in/michaelnsc/)
[![Microsoft Badge](https://img.shields.io/badge/-michael.nsc@outlook.com-blue?style=flat-square&logo=Microsoft&logoColor=white&link=mailto:michael.nsc@outlook.com)](mailto:michael.nsc@outlook.com)

---
