import styled from "styled-components";

import bannerImg from "../../../assets/galeria/img21.jpeg";

export const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  margin-top: 100px;

  background-image: url(${bannerImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .img {
    height: 100%;
    max-width: 100%;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      width: 400px;
      height: 400px;
    }
  }

  @media (max-width: 768px){
    .img img{
      width: 110%;
      height: 80%;
    }
  }
`;
