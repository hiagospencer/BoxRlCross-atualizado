/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import { currencyFormat } from "../../helpers/currencyFormat";
import { notifySucess } from "../../helpers/notifySucess";
import { notifyError } from "../../helpers/notifyError";
import { sendToWhatsApp } from "../../helpers/sendToWhatsApp";

import produtosAPI from "../../services/produtosAPI";

import { BsFillCartPlusFill } from "react-icons/bs";

import { Container } from "./styles";

function index() {
  const [productCart, setProductCart] = useState("");

  const getProductCart = (name, price, index) => {
    setProductCart({ name: name, price: price, id: index });

    if (productCart) {
      const result = confirm(
        `Deseja enviar o produto ${productCart.name} ao vendedor?`
      );
      if (result == true) {
        notifySucess();
        sendToWhatsApp(productCart.name, productCart.price);

        setTimeout(() => {
          window.open("https://rlcrosstraining.vercel.app/", "_self");
        }, 5000);
      }
    } else {
      notifyError();
    }
  };

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
            <button
              type="button"
              className="button__add-cart"
              onClick={() =>
                getProductCart(produto.name, produto.price, produto.id)
              }>
              <BsFillCartPlusFill />
            </button>
          </div>
        </section>
      ))}
    </Container>
  );
}

export default index;
