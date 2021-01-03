/* eslint-disable arrow-body-style */
import React from "react";
import Button from "../../components/Button";
import {
  ContentContainer,
  ContentHeader,
} from "../../components/ContentContainer";

const NewUserPage = () => {
  return (
    <ContentContainer>
      <ContentHeader>
        <h2>Cadastrar novo usuário</h2>
        <Button type="button">Salvar</Button>
      </ContentHeader>
    </ContentContainer>
  );
};

export default NewUserPage;
