import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Container } from "./styles";

import HomeIcon from "../../assets/home.svg?react";
import ContatoIcon from "../../assets/contato.svg?react";
import PlanosIcon from "../../assets/planos.svg?react";
import SobreIcon from "../../assets/quem-somos.svg?react";
import FotosIcon from "../../assets/fotos.svg?react";
import CartIcon from "../../assets/cart.svg?react";

import menuImg from "../../assets/menu.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Container isMenuOpen={menuOpen}>
      <button type="button" onClick={handleToggleMenu}>
        <img src={menuImg} alt="Abrir e fechar o menu" />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <HomeIcon />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="quem-somos">
              <SobreIcon />
               <span>SOBRE</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="planos">
              <PlanosIcon />
              <span>PLANOS</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="galeria">
              <FotosIcon />
              <span>GALERIA</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="contato">
              <ContatoIcon />
              <span>CONTATO</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="shopping">
              <CartIcon />
              <span>PRODUTOS</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
