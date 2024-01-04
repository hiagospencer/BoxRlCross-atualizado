import { currencyFormat } from "../../helpers/currencyFormat";

import produtosAPI from "../../services/produtosAPI";

import { BsFillCartPlusFill } from "react-icons/bs";

import { Container } from "./styles";

function index() {
  return (
    <Container>
      {produtosAPI.produtosAPI.map((produto) => (
        <section className="product-card" key={produto.id}>
          <img src={produto.img} alt={produto.name} className="card__image" />
          <div className="card__infos">
            <h2 className="card__name">{produto.name}</h2>
            <h2 className="card__title">{produto.description}</h2>
          </div>

          <div className="cart-buy">
            <h2 className="card__price">{currencyFormat(produto.price)}</h2>
            <button type="button" className="button__add-cart">
              <BsFillCartPlusFill />
            </button>
          </div>
        </section>
      ))}
    </Container>
  );
}

export default index;
