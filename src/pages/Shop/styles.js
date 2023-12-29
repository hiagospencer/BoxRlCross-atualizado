import styled from "styled-components";

export const Container = styled.main`
  div {

    text-align: center;

    h1 {
      display: inline-block;
      padding-bottom: 20px;
      margin: 0 auto;
      margin: 50px 0;
      color: #656565;
      font-size: 1.9rem;
      border-bottom: 4px solid ${({ theme }) => theme.colors.pink};
    }

  }

  p {
      color: ${({ theme }) => theme.colors.gray600};
      text-align: center;
      margin-bottom: 20px;
    }
`;
