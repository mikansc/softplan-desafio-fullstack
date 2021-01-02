/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginContainer from "../../components/LoginContainer";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { login } from "../../store/userDomain/actions";

const LoginPage = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const session = useSelector((state) => state.session);
  const { userInfo } = session;

  useEffect(() => {
    if (userInfo) {
      history.push("dashboard/users");
    }
  }, [history, userInfo]);

  const submitLoginHandler = (event) => {
    event.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <LoginContainer>
      <h2>Acesso ao sistema</h2>
      <form onSubmit={submitLoginHandler}>
        <TextInput
          inputLabel="Usuário"
          inputType="text"
          inputId="username"
          value={username}
          onChange={setUsername}
        />
        <TextInput
          inputLabel="Senha"
          inputType="password"
          inputId="password"
          value={password}
          onChange={setPassword}
        />
        <Button submit>ENTRAR</Button>
      </form>
    </LoginContainer>
  );
};

export default LoginPage;
