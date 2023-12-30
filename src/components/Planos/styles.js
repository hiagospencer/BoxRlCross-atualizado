import styled from "styled-components";

export const BoxPlanos = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  align-items: center;
  gap: 10px;

  .info-planos {
    width: 32%;
    height: 100%;
    border: 1px solid rgb(160, 248, 27);
    background-color: #606060;
    border-radius: 4px;
    padding: 30px;
    text-align: center;
  }
  .info-planos:hover {
    transition: 0.6s;
    background-color: #181818;
    color: ${({ theme }) => theme.colors.gray900};
  }
  .info-planos span {
    display: block;
    font-size: 1.3rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray100};
    border-bottom: 1px solid #a1a0a0;
    padding-bottom: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .info-planos p {
    margin-top: 16px;
    font-family: "verdana", sans-serif;
    line-height: 1.4rem;
    color: ${({ theme }) => theme.colors.gray400};
  }



  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;

    .info-planos {
      width: 80%;
      margin: 0 auto;
    }
  }
`;
