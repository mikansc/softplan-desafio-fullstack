import React from "react";
import Button from "../../../components/Button";
import {
  ContentContainer,
  ContentHeader,
} from "../../../components/ContentContainer";

const AssignedProjectDetailsPage = () => (
  <ContentContainer>
    <ContentHeader>
      <h2>Detalhes do projeto</h2>
      <Button type="button">Cadastrar parecer</Button>
    </ContentHeader>
  </ContentContainer>
);

export default AssignedProjectDetailsPage;
