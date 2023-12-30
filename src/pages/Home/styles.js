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
      filter: contrast(100%) brightness(100%);
    }

    h1 {
      display: none;
      position: absolute;
      top: 60%;
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
