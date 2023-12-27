import { Container } from "./styles";

import porqueCrossImg from "../../../assets/porque-cross.png";

import { ImgAPI } from "../../../services/imgsAPI";

function index() {
  const apiImgsCrossfit = ImgAPI.map((images) => (
    <div className="img-crossfit" key={images.id}>
      <img src={images.img} alt={images.id} />
    </div>
  ));

  return (
    <Container>
      <div className="crossImg">
        <img src={porqueCrossImg} alt="Por que CrossFit?" />
      </div>

      <div className="box-crossfit">{apiImgsCrossfit}</div>
    </Container>
  );
}

export default index;
