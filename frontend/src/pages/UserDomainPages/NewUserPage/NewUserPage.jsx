import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Button from "../../../components/Button";
import Container from "../../../components/Container";
import TextInput from "../../../components/TextInput";
import {
  ContentContainer,
  ContentHeader,
} from "../../../components/ContentContainer";

import SelectInput from "../../../components/SelectInput";
import parseRole from "../../../commons/utils/parseRole";
import { createNewUser } from "../../../store/userDomain/actions";

const DEFAULT_ROLES = ["ADMIN", "MANAGER", "FINISHER"];

const NewUserPage = () => {
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("FINISHER");

  const dispatch = useDispatch();
  const history = useHistory();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const newUser = {
      displayName,
      username,
      email,
      password,
      confirmPassword,
      selectedRole,
    };
    dispatch(createNewUser(newUser));
    history.push("/dashboard/users");
  };

  const handleCancelOperation = () => {
    history.goBack();
  };

  return (
    <ContentContainer>
      <ContentHeader>
        <h2>Novo usuário</h2>
      </ContentHeader>
      <form onSubmit={submitFormHandler}>
        <Container row>
          <TextInput
            halfWidth
            inputLabel="Nome"
            value={displayName}
            inputId="displayName"
            name="displayName"
            onInput={setDisplayName}
          />
        </Container>
        <Container row>
          <TextInput
            halfWidth
            inputLabel="Nome de usuário"
            value={username}
            inputId="username"
            name="username"
            onInput={setUsername}
          />
          <TextInput
            inputLabel="Email"
            halfWidth
            value={email}
            type="email"
            inputId="email"
            name="email"
            onInput={setEmail}
          />
        </Container>

        <Container row>
          <TextInput
            inputLabel="Senha"
            halfWidth
            value={password}
            type="password"
            inputId="password"
            name="password"
            onInput={setPassword}
          />
          <TextInput
            inputLabel="Confirmar senha"
            halfWidth
            value={confirmPassword}
            type="password"
            inputId="confirmPassword"
            name="confirmPassword"
            onInput={setConfirmPassword}
          />
        </Container>
        <Container row>
          <SelectInput
            inputLabel="Papel"
            halfWidth
            inputId="role"
            name="role"
            value={selectedRole}
            onChange={setSelectedRole}
          >
            {DEFAULT_ROLES.map((role) => (
              <option key={role} value={role}>
                {parseRole(role)}
              </option>
            ))}
          </SelectInput>
        </Container>
        <Container row>
          <Button submit>Salvar</Button>
          <Button action="cancel" onClick={handleCancelOperation}>
            Cancelar
          </Button>
        </Container>
      </form>
    </ContentContainer>
  );
};

export default NewUserPage;
