/* eslint-disable arrow-body-style */
import React from "react";
import Button from "../../components/Button";
import {
  ContentContainer,
  ContentHeader,
} from "../../components/ContentContainer";

const EditUserPage = () => {
  return (
    <ContentContainer>
      <ContentHeader>
        <h2>Editar usuário</h2>
        <Button type="button">Salvar</Button>
      </ContentHeader>
    </ContentContainer>
  );
};

export default EditUserPage;
