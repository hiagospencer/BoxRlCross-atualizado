/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import { toast } from 'react-toastify';

import { currencyFormat } from "../../helpers/currencyFormat";

import produtosAPI from "../../services/produtosAPI";

import { BsFillCartPlusFill } from "react-icons/bs";

import { Container } from "./styles";

function index() {
  const [productCart, setProductCart] = useState("");

  const getProductCart = (name, price, index) => {
    setProductCart({ name: name, price: price, id: index });

    if (!productCart) {
      notifyError()
    } else {
      notifySucess()
      sendToWhatSapp()
    }
  };

  const sendToWhatSapp = () => {
    const numeroDestino = "+5584987137129";
    const mensagem = "Olá, esse produto está disponível?";

    const url =
      "https://wa.me/" +
      numeroDestino +
      "?text=" +
      mensagem +
      "%0a%0a" +
      "Nome: " +
      productCart.name +
      "%0a" +
      "Preço: " +
      productCart.price;
    window.open(url, "_blank").focus();
  };


  const notifySucess = () => {
    toast.success('Produto adicionado com sucesso!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const notifyError = () => {
    toast.error('[ERROR] Tente novamente.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }


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
            <h2 className="card__price" onClick={sendToWhatSapp}>
              {currencyFormat(produto.price)}
            </h2>
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
