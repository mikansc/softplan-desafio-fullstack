import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../../store/userDomain/actions";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import TextInput from "../../../components/TextInput";
import {
  ContentContainer,
  ContentHeader,
} from "../../../components/ContentContainer";
import SelectInput from "../../../components/SelectInput";
import parseRole from "../../../commons/utils/parseRole";
import getUserRole from "../../../commons/utils/getUserRole";

const DEFAULT_ROLES = ["ADMIN", "MANAGER", "FINISHER"];

const EditUserPage = () => {
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  useEffect(() => {
    if (!user || user.id !== id) {
      dispatch(getUser(id));
    } else {
      setDisplayName(user.displayName);
      setUsername(user.username);
      setEmail(user.email);
      setSelectedRole(getUserRole(user.roles));
    }
  }, [dispatch, user]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const updatedUser = {
      displayName,
      email,
      username,
      selectedRole,
    };
    console.log(updatedUser);
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
        <Container row>
          {user && (
            <SelectInput
              inputLabel="Papel"
              halfWidth
              inputId="role"
              name="role"
              value={selectedRole}
              onChange={setSelectedRole}
            >
              {user &&
                DEFAULT_ROLES.map((role) => (
                  <option key={role} value={role}>
                    {parseRole(role)}
                  </option>
                ))}
            </SelectInput>
          )}
        </Container>
        <Container row>
          <Button submit>Salvar</Button>
          <Button action="cancel">Cancelar</Button>
        </Container>
      </form>
    </ContentContainer>
  );
};
export default EditUserPage;
