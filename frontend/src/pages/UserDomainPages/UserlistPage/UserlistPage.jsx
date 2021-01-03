/* eslint-disable arrow-body-style */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../../../components/Button";
import {
  ContentContainer,
  ContentHeader,
} from "../../../components/ContentContainer";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
} from "../../../components/Table";
import TableRow from "../../../components/Table/TableRow";
import { getUsers } from "../../../store/userDomain/actions";
import parseRole from "../../../commons/utils/parseRole";
import CrudButton from "../../../components/CrudButton";

const tableHeadings = ["Nome", "Usuário", "Papel", ""];

const UserlistPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const session = useSelector((state) => state.session);
  const { userInfo } = session;

  const userList = useSelector((state) => state.userList);
  const { loading, users } = userList;

  useEffect(() => {
    if (userInfo) {
      dispatch(getUsers());
    }
  }, [dispatch, userInfo]);

  const handleNavigateToNewUserPage = () => {
    history.push("/dashboard/users/new");
  };

  const handleEditUser = (userId) => {
    history.push(`/dashboard/users/${userId}`, { userId });
  };

  const handleDeleteUser = (userId) => {
    console.log(userId);
  };

  return (
    <ContentContainer>
      <ContentHeader>
        <h2>Usuários cadastrados</h2>
        <Button type="button" onClick={handleNavigateToNewUserPage}>
          Novo usuário
        </Button>
      </ContentHeader>
      {loading ? null : (
        <Table>
          <TableHead headerArray={tableHeadings} />
          <TableBody>
            {users &&
              users.map((usuario) => {
                return (
                  <TableRow key={usuario.id}>
                    <TableData>{usuario.displayName}</TableData>
                    <TableData>{usuario.username}</TableData>
                    <TableData>{parseRole(usuario.roles)}</TableData>
                    <TableData>
                      <CrudButton
                        action="edit"
                        onClick={() => handleEditUser(usuario.id)}
                      />
                      <CrudButton
                        action="delete"
                        onClick={() => handleDeleteUser(usuario.id)}
                      />
                    </TableData>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      )}
    </ContentContainer>
  );
};

export default UserlistPage;
