import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Help from "./components/Help";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/ayuda" element={<Help />} />
          <Route path="/conocenos" element={<AboutUs />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
