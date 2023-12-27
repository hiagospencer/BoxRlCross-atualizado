/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import Head from "../../components/Head/index";
import Modal from "../../components/Modal/index";
import Footer from "../../components/Footer/index";

import { Container } from "./styles";
import { ModalContext } from "../../context/ModalContext";

function index() {
  const { tempimgSrc, galeriaBox } = useContext(ModalContext);

  return (
    <>
      {tempimgSrc && <Modal />}
      <h1
        style={{
          textAlign: "center",
          color: "#454545",
          padding: "50px 0",
          fontWeight: "900",
          fontSize: "2.5rem",
        }}>
        FOTOS DA RL CROSSFIT
      </h1>
      <Container>
        <Head title="GALERIA" />
        {galeriaBox}
      </Container>
      <Footer />

    </>
  );
}

export default index;
