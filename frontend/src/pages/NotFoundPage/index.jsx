import React from "react";
import Button from "../../components/Button";
import { ContentContainer } from "../../components/ContentContainer";

const NotFoundPage = ({ history }) => {
  return (
    <ContentContainer>
      <h1>Erro 404.</h1>
      <p>A página que você tentou visitar não existe.</p>
      <Button
        onClick={() => {
          return history.push("/");
        }}
      >
        Voltar
      </Button>
    </ContentContainer>
  );
};

export default NotFoundPage;
