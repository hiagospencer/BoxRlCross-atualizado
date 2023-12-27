import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 900px;
  height: 100vh;

  margin: 0 auto;

  h1 {
    text-align: center;
    padding: 20px 0;

    color: #454545;

    font-size: 2.2rem;
    font-weight: 900;
    font-style: italic;
  }

  @media (max-width: 768px){
    h1 {
      font-size: 1.5rem;
    }


  }
`;
