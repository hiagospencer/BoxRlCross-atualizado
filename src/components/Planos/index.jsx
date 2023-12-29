
import { BoxPlanos } from "./styles";

function index({ infoPlanos }) {
  return (
    <BoxPlanos>
      {infoPlanos.map((info) => (
        <div className="info-planos" key={info.id}>
          <h2>{info.name}</h2>
          <br />
          <span>R$ {info.price},00</span>
          <p>
            {info.description}
          </p>
        </div>
      ))}
    </BoxPlanos>
  );
}

export default index;
