import { useState } from "react";

import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ModalContext } from "./context/ModalContext";

import imgGaleriaAPI from "./services/imgGaleriaAPI";

import { Normalize } from "styled-normalize";

import { GlobalStyle } from "./styles/global";
import { Theme } from "./styles/Theme";

function App() {
  const [tempimgSrc, setTempImgSrc] = useState("");

  const galeriaBox = imgGaleriaAPI.imgGaleriaAPI.map((item, index) => {
    return (
      <div className="pics" key={index} onClick={() => getImg(item.imgSrc, index)}>
        <img src={item.imgSrc} alt="" style={{ width: "100%" }} />
      </div>
    );
  });

  const getImg = (imgSrc, i) => {
    setTempImgSrc({img:imgSrc, index:i});
  };

  return (
    <BrowserRouter>
      <Theme>
        <ModalContext.Provider
          value={{ tempimgSrc, setTempImgSrc, galeriaBox }}>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
          <ToastContainer />
        </ModalContext.Provider>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
