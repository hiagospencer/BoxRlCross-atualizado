import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title-planos h1 {
    color: #454545;

    font-size: 2.7rem;
    font-weight: 900;
    font-style: italic;

    text-align: center;
  }

  .title-planos p {
    font-size: 1.175em;
    color: #656565;
    line-height: 2rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;

    .title-planos p {
      text-align: center;
      padding: 20px 0;
      margin-bottom: 20px;
    }
  }

`;
