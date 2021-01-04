import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { getUser, updateUser } from "../../../store/userDomain/actions";
import parseRole from "../../../commons/utils/parseRole";

import {
  ContentContainer,
  ContentHeader,
} from "../../../components/ContentContainer";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import TextInput from "../../../components/TextInput";
import CheckboxInput from "../../../components/CheckboxInput";

const DEFAULT_ROLES = ["ADMIN", "MANAGER"];

const EditUserPage = () => {
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState([]);
  const [password, setPassword] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  useEffect(() => {
    if (!user || user.id !== id) {
      dispatch(getUser(id));
    } else {
      setDisplayName(user.displayName);
      setUsername(user.username);
      setEmail(user.email);
      setRoles(user.roles);
    }
  }, [dispatch, user]);

  const handleSelectRole = (selectedRole) => {
    if (roles.includes(selectedRole)) {
      setRoles(roles.filter((role) => role !== selectedRole));
    } else {
      setRoles([...roles, selectedRole]);
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const updatedUser = {
      displayName,
      email,
      username,
      password,
      roles,
    };
    dispatch(updateUser(updatedUser, user.id));
    history.push("/dashboard/users");
  };

  const handleCancelOperation = () => {
    history.goBack();
  };

  return (
    <ContentContainer>
      <ContentHeader>
        <h2>Editar usuário {user && user.displayName}</h2>
      </ContentHeader>
      <form onSubmit={submitFormHandler}>
        <Container row>
          <TextInput
            inputLabel="Nome"
            value={displayName}
            inputId="displayName"
            name="displayName"
            onInput={setDisplayName}
          />
          <TextInput
            inputLabel="Nome de usuário"
            value={username}
            inputId="username"
            name="username"
            onInput={setUsername}
          />
        </Container>

        <Container row>
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
        <Container row halfWidth>
          {roles &&
            DEFAULT_ROLES.map((role) => (
              <CheckboxInput
                key={role}
                inputLabel={parseRole(role)}
                type="checkbox"
                name={role}
                id={role}
                value={role}
                checked={roles.includes(role)}
                onChange={handleSelectRole}
              />
            ))}
        </Container>
        <Container>
          <TextInput
            inputLabel="Digite sua senha para confirmar"
            halfWidth
            value={password}
            type="password"
            inputId="password"
            name="password"
            onInput={setPassword}
          />
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
export default EditUserPage;
