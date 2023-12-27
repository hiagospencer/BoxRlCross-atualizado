import { Route, Routes } from "react-router-dom";

import Home from "./pages/Main";
import HomePage from "./pages/Home/index";
import SobrePage from "./pages/Sobre/index";
import PlanosPage from "./pages/Planos/index";
import GaleriaPage from "./pages/Galeria/index";
import ContatoPage from "./pages/Contato/index";
import ShopPage from "./pages/Shop/index";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<HomePage />} />
        <Route path="quem-somos" element={<SobrePage />} />
        <Route path="planos" element={<PlanosPage />} />
        <Route path="galeria" element={<GaleriaPage />} />
        <Route path="contato" element={<ContatoPage />} />
        <Route path="shopping" element={<ShopPage />} />
      </Route>
    </Routes>
  );
}
