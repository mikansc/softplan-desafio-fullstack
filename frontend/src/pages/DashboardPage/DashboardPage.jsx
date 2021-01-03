/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  ContentContainer,
  ContentHeader,
} from "../../components/ContentContainer";
import Container from "../../components/Container";

const DashboardPage = () => {
  const session = useSelector((state) => state.session);
  const { userInfo } = session;

  const { roles } = userInfo;
  const isAdmin = roles.includes("ADMIN");
  const isManager = roles.includes("MANAGER") || isAdmin;

  return (
    <ContentContainer>
      <ContentHeader>
        <h2>Seja bem-vindo, {userInfo.displayName}</h2>
      </ContentHeader>
      <Container row>
        {isAdmin && <Link to="/dashboard/users">Listar usuários</Link>}
        {isManager && <Link to="/dashboard/projects">Listar projetos</Link>}
      </Container>
    </ContentContainer>
  );
};

export default DashboardPage;
