import React, { useState } from "react";

import styled from "styled-components";

import BG2 from "../dist/bg2.png";

export default function Home() {
  const [where, setWhere] = useState(false);

  const handleWhat = (e) => {};

  return (
    <Container>
      <LogoContainer>LOGO</LogoContainer>
      <SubContainer>
        <IMG src={BG2} />
        <SearchContainer>
          <Title>Encuentra la empresa que buscas</Title>
          <Text>Ayúdanos opinando al respecto</Text>

          <Input
            placeholder="¿Qué estás buscando?"
            onChange={handleWhat}
          ></Input>
          {where ? (
            <Input placeholder="¿Algún lugar en mente?"></Input>
          ) : (
            <div></div>
          )}
        </SearchContainer>
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 90%;
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

  align-items: center;
  justify-content: space-between;

  background-color: transparent;

  width: 100%;
  height: 100%;
`;

const IMG = styled.img`
  height: 80%;

  opacity: 80%;

  margin: 0 2%;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  height: inherit;

  align-items: center;
  justify-content: center;
`;

const Title = styled.label`
  margin: 1% 0;

  font-size: 2.4rem;
`;

const Text = styled.label`
  margin: 1% 0;

  font-size: 1.2rem;
  font-weight: 400;
`;

const Input = styled.input`
  margin: 2% 0;
  padding: 1% 2%;

  height: 5%;
  width: 60%;

  border-radius: 3px;
  border-color: #000;
`;
