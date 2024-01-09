import styled from "styled-components";

export const Container = styled.main`
  width: 100%;

  .title-coach > h1 {
    text-align: center;
    color: #454545;
    font-size: 3rem;
    font-weight: bold;
    font-style: italic;

    padding: 30px 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .title-coach h1 {
      padding: 70px 0;
      color: #454545;
      font-size: 2.5rem;
    }
  }
`;

export const CardCultura = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 0 2%;
  width: 100%;
  height: 100vh;

  margin-top: 80px;

  .cultura {
    width: 50%;

    h1 {
      color: #454545;
      font-size: 2.775rem;
      border-bottom: 1px solid #cecece;
    }

    p {
      font-size: 1.375em;
      color: #656565;
      line-height: 2rem;
    }
  }

  .img-cultura {
    width: 40%;
    height: 100%;
  }
  .img-cultura img {
    width: 90%;
    height: 80%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .cultura {
    width: 100%;
    padding: 10px;

    h1 {
      font-size: 1.9rem;
    }
  }

  .img-cultura {
    width: 100%;
    text-align: center;
  }
`;

export const CardCoach = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 0 2%;
  width: 100%;
  height: 100vh;

  .img-coach {
    width: 45%;
    height: 550px;
  }

  .img-coach img {
    max-width: 100%;
    width: 80%;
    height: 80%;
  }

  .description {
    width: 45%;
    height: 100vh;
  }

  .description h1 {
    color: #656565;
  }

  .description p {
    padding: 10px 0;
    line-height: 30px;
    font-size: 18px;
    color: #a9a9a9;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px 0;

    .img-coach {
      width: 100%;
      padding: 20px;
    }

    .img-coach img {
      max-width: 100%;
      width: 100%;
      height: 350px;
    }

    .description {
      width: 100%;
      height: 100vh;
      padding: 20px;
    }
  }
  @media (max-width: 390px) {
    margin-top: 180px;
  }
`;
