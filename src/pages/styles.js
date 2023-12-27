import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  background: ${({ theme }) => theme.colors.gray200};
  color: ${({ theme }) => theme.colors.black};

  display: flex;

  > section {
    flex: 1;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 0.1rem 0.175rem 0 0.175rem;

    img {
      width: 10rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      padding-bottom: 8rem;

      img {
        align-self: center;
      }
    }
  }
`;
