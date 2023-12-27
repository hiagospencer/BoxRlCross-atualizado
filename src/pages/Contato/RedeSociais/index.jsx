import instagramIcon from "../../../assets/instagram.svg";
import whatsappIcon from "../../../assets/whatsapp.svg";

import { Container } from "./styles";

function index() {
  return (
    <Container>
      <div className="instagram">
        <a href="https://www.instagram.com/box_rlcross/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="" />
        </a>
      </div>
      <div className="whatsapp">
        <a href="https://wa.me/5584987137129" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="" />
        </a>
      </div>
    </Container>
  );
}

export default index;
