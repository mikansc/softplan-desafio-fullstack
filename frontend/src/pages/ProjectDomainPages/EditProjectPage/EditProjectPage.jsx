import React from "react";
import Button from "../../../components/Button";
import {
  ContentContainer,
  ContentHeader,
} from "../../../components/ContentContainer";

const EditProjectPage = () => (
  <ContentContainer>
    <ContentHeader>
      <h2>Editar projeto</h2>
      <Button type="button">Salvar</Button>
    </ContentHeader>
  </ContentContainer>
);

export default EditProjectPage;
