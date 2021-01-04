import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LoginContainer from "../../components/LoginContainer";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { login } from "../../store/userDomain/actions";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const session = useSelector((state) => state.session);
  const { loading, userInfo } = session;

  useEffect(() => {
    if (userInfo) {
      history.push("dashboard");
    }
  }, [history, userInfo, loading]);

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
          type="text"
          inputId="username"
          value={username}
          onInput={setUsername}
        />
        <TextInput
          inputLabel="Senha"
          type="password"
          inputId="password"
          value={password}
          onInput={setPassword}
        />
        <Button submit>ENTRAR</Button>
      </form>
    </LoginContainer>
  );
};

export default LoginPage;
