import React from "react";
import Button from "../../../components/Button";
import {
  ContentContainer,
  ContentHeader,
} from "../../../components/ContentContainer";

const EditUserPage = () => (
  <ContentContainer>
    <ContentHeader>
      <h2>Editar usuário</h2>
      <Button type="button">Salvar</Button>
    </ContentHeader>
  </ContentContainer>
);

export default EditUserPage;
