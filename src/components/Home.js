import React from "react";

import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <LogoContainer>LOGO</LogoContainer>
      <SubContainer></SubContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;

  background-color: cyan;
`;

const LogoContainer = styled.div`
  position: absolute;
  display: flex;

  align-items: center;
  justify-content: center;

  width: 260px;
  height: 100px;
  left: 10%;
  top: 30px;

  color: #ffffff;
  font-size: 4.8rem;
  font-weight: 2000;

  background-color: #54bfa1;
`;

const SubContainer = styled.div`
  display: flex;

  background-color: gray;

  width: 100%;
  height: 100%;
`;
