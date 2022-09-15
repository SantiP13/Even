import React from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Container>
      <Button>Contacto</Button>
      <Button onClick={() => navigate("/ayuda")}>Ayuda</Button>
      <Button onClick={() => navigate("/conocenos")}>Conócenos</Button>
      <Button>Log In</Button>
    </Container>
  );
}

const Container = styled.div`
  position: static;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 10%;

  background-color: #49378c;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;

  width: 8%;
  margin: 0 10px;

  font-size: 1.4rem;

  background-color: transparent;
  border: none;

  color: white;
  word-wrap: break-word;

  :hover {
    margin-top: 3px;
    color: rgb(240, 240, 240);
    cursor: pointer;
  }
`;
