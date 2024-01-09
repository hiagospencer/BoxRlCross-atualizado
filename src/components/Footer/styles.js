import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;
