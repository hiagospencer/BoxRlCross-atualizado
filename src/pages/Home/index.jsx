import Head from "../../components/Head/index";

import Footer from '../../components/Footer/index'

import AulaExperimental from "./AulaExperimental/index";
import PorqueCrossfit from './PorqueCrossfit/index'

import { Container } from "./styles";

import imgBanner from "../../assets/box-rl2.jpg";

function index() {
  return (
    <>
      <Container>
        <Head title="HOME" />
        <div>
          <img className="banner" src={imgBanner} alt="imagem dos aulos da Box" />
          <h1>
            A RL CROSS TRAINING É A MUDANÇA QUE VOCÊ PRECISA PARA A SUA VIDA!
          </h1>
        </div>
      </Container>
      <PorqueCrossfit />
      <AulaExperimental />
      <Footer/>
    </>
  );
}

export default index;
