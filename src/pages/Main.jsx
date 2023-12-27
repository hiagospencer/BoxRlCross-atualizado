import { Outlet } from "react-router-dom";

import Header from "../components/Header";

import { Container } from "./styles";

function main() {
  return (
    <Container>
      <Header />
      <section>
        <Outlet />
      </section>
    </Container>
  );
}

export default main;
