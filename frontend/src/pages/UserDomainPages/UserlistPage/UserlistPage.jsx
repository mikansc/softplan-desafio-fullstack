/* eslint-disable arrow-body-style */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const tableHeadings = ["Nome", "Usuário", "Papel", ""];

const UserlistPage = () => {
  const dispatch = useDispatch();

  const session = useSelector((state) => state.session);
  const { userInfo } = session;

  const userList = useSelector((state) => state.userList);
  const { loading, users } = userList;

  useEffect(() => {
    if (userInfo) {
      dispatch(getUsers());
    }
  }, [dispatch, userInfo]);

  return (
    <ContentContainer>
      <ContentHeader>
        <h2>Usuários cadastrados</h2>
        <Button type="button">Novo usuário</Button>
      </ContentHeader>
      {loading ? null : (
        <Table>
          <TableHead headerArray={tableHeadings} />
          <TableBody>
            {users &&
              users.map((usuario) => {
                return (
                  <TableRow>
                    <TableData>{usuario.displayName}</TableData>
                    <TableData>{usuario.username}</TableData>
                    <TableData>{parseRole(usuario.roles)}</TableData>
                    <TableData>Editar / Excluir</TableData>
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
