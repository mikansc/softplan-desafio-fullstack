/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../../components/Button";
import {
  ContentContainer,
  ContentHeader,
} from "../../components/ContentContainer";
import { Table, TableBody, TableData, TableHead } from "../../components/Table";
import TableRow from "../../components/Table/TableRow";

const data = [
  { name: "Michael", username: "michaelnsc", role: "Admin" },
  { name: "Gustavo", username: "gustavo2020", role: "Triador" },
  { name: "Fernando", username: "nandosp", role: "Seilá" },
  { name: "Almir", username: "almirsantos", role: "Triador" },
];

const DashboardPage = () => {
  const tableHeadings = ["Nome", "Usuário", "Papel", ""];

  return (
    <div className="dashboard-body">
      <ContentContainer>
        <ContentHeader>
          <h2>Usuários cadastrados</h2>
          <Button type="button">Novo usuário</Button>
        </ContentHeader>
        <Table>
          <TableHead headerArray={tableHeadings} />
          <TableBody>
            {data.map((usuario) => {
              return (
                <TableRow>
                  <TableData>{usuario.name}</TableData>
                  <TableData>{usuario.username}</TableData>
                  <TableData>{usuario.role}</TableData>
                  <TableData>Editar / Excluir</TableData>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ContentContainer>
    </div>
  );
};

export default DashboardPage;
