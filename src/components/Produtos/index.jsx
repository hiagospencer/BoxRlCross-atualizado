import produtosAPI from "../../services/produtosAPI";

import { Container } from "./styles";

function index() {
  return (
    <Container>
      {produtosAPI.produtosAPI.map((produto) => (
        <div key={produto.id} className="produto">
          <div className="img">
            <img src={produto.img} alt={produto.name} />
          </div>
          <div className="info">
            <p>{produto.description}</p>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default index;
