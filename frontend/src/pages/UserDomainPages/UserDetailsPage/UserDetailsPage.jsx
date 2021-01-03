import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  ContentContainer,
  ContentHeader,
} from "../../../components/ContentContainer";
import { getUser } from "../../../store/userDomain/actions";

const UserDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch]);

  return (
    <ContentContainer>
      <ContentHeader>
        <h2>Detalhes do usuário {user && user.displayName}</h2>
      </ContentHeader>
    </ContentContainer>
  );
};

export default UserDetailsPage;
