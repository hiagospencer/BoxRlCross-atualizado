import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  .title h1 {
    text-align: center;
    color: #454545;

    font-size: 2.5rem;
    font-weight: 900;
    font-style: italic;

    padding: 50px 0;
  }

  .localizacao {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .card-localizacao {
    display: flex;
    flex-direction: column;

    border-top-left-radius: 20%;
    border-bottom-right-radius: 20%;

    background: ${({ theme }) => theme.colors.red};
    width: 30%;

    .info-contato {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      width: 100%;
      padding: 10px 0;

      h2 {
        margin-bottom: 17px;
        color: #fff;
      }

      svg {
        margin-right: 5px;
        color: ${({theme}) => theme.colors.black};

      }
      span {
        padding: 8px;
        font-size: 1rem;
        color: ${({theme}) => theme.colors.gray100};
      }
    }
  }

  .map {
    width: 70%;
    height: 400px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .map iframe {
    width: 90%;
    height: 100%;
  }

  @media (max-width: 768px) {
    .title h1 {
      font-size: 1.7rem;
    }
    .localizacao {
      flex-direction: column;
    }

    .map {
      width: 90%;
      margin: 0 auto;
    }

    .card-localizacao {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px;
    }

    .info-contato {
      width: 50%;
    }
  }
`;
