import React from "react";
import Button from "../../components/Button";
import LoginContainer from "../../components/LoginContainer";
import TextInput from "../../components/TextInput";

const LoginScreen = () => {
  return (
    <LoginContainer>
      <h2>Acesso ao sistema</h2>
      <form>
        <TextInput inputLabel="Usuário" inputType="text" inputId="username" />
        <TextInput inputLabel="Senha" inputType="password" inputId="password" />
        <Button>ENTRAR</Button>
      </form>
      <p>Esqueci minha senha</p>
      <span>
        <a href="!#">Primeiro acesso?</a>
      </span>
    </LoginContainer>
  );
};

export default LoginScreen;
