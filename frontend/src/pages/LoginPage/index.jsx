import React from "react";
import LoginContainer from "../../components/LoginContainer";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";

const LoginPage = () => {
  const submitLoginHandler = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log("Login click");
  };

  return (
    <LoginContainer>
      <h2>Acesso ao sistema</h2>
      <form onSubmit={submitLoginHandler}>
        <TextInput inputLabel="Usuário" inputType="text" inputId="username" />
        <TextInput inputLabel="Senha" inputType="password" inputId="password" />
        <Button submit onPress={submitLoginHandler}>
          ENTRAR
        </Button>
      </form>
    </LoginContainer>
  );
};

export default LoginPage;
