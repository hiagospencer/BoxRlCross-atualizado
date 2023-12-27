import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  div {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      z-index: -1;
      width: 100%;
      max-width: 100%;
      height: 600px;

      object-fit: cover;
      filter: contrast(140%) brightness(45%);
    }

    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -10%);

      font-size: 2.7rem;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-style: italic;
    }
    @media (max-width: 768px) {
      .banner {
        width: 100%;
        max-width: 100%;
        height: 100%;
       filter: none;

      }

      h1 {
        display: none;
      }
    }
  }
`;
