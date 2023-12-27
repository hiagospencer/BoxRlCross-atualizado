import Head from "../../components/Head/index";
import Footer from "../../components/Footer/index";

import { MdEmail, MdLocationOn  } from "react-icons/md";
import { FaPhoneSquareAlt, FaCity  } from "react-icons/fa";

import AvaliacoesGoogle from "./AvaliacoesGoogle/index";
import RedeSociais from "./RedeSociais/index";

import { Container } from "./styles";

function index() {
  return (
    <Container>
      <Head title="CONTATO" />
      <div className="title">
        <h1>Entre em contato</h1>
      </div>

      <div className="localizacao">

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865.089033174949!2d-37.13422402971838!3d-4.955367978245695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b75b1b1664211f%3A0x45f6a256827d6b3b!2sBox%20RL%20Cross!5e0!3m2!1spt-BR!2sbr!4v1702819776773!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="card-localizacao">
          <div className="info-contato">
            <h2>LOCALIZAÇÃO</h2>
            <span>
              <b><MdLocationOn /></b>Mestre Silvério Barreto - 243
            </span>
            <span>
              <b><FaCity/></b>Areia Branca/RN - Centro
            </span>
          </div>
          <div className="info-contato">
            <h2>CONTATO</h2>
            <span>
              <b><FaPhoneSquareAlt /></b>(84) 98713-7129
            </span>
            <span>
              <b><MdEmail /></b>rlcrosstraining@gmail.com
            </span>
          </div>
          <div className="info-contato">
            <h2>MÍDIAS SOCIAIS</h2>
            <RedeSociais />
          </div>
        </div>
      </div>
      <AvaliacoesGoogle />
      <Footer />
    </Container>
  );
}

export default index;
