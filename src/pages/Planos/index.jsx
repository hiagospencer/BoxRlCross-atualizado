import { planosAPI } from "../../services/planosAPI";

import Horarios from './Horarios/index'

import Head from "../../components/Head/index";
import Footer from "../../components/Footer/index";
import CardPlanos from "../../components/Planos/index";

import { Container } from "./styles";

function index() {
  return (
    <Container>
      <Head title="PLANOS" />
      <div className="title-planos">
        <h1> PLANOS</h1>
        <p>
          Conheça nossas opções de planos e comece hoje mesmo uma vida mais
          saudável.
        </p>
      </div>
      <CardPlanos infoPlanos={planosAPI} />
      <Horarios />
      <Footer />
    </Container>
  );
}

export default index;
