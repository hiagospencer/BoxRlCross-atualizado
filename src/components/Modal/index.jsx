/* eslint-disable react-hooks/rules-of-hooks */
import { ModalContext } from "../../context/ModalContext";
import { Container } from "./styles";
import { useContext } from "react";

function index() {
  const { tempimgSrc, setTempImgSrc } = useContext(ModalContext);


  return (
    <Container>
      <img
        src={tempimgSrc.img}
        alt=""
        style={{
          width: "100%",
          margin: "0 auto",
        }}
      />

      <button onClick={() => setTempImgSrc("")}>X</button>
    </Container>
  );
}

export default index;
