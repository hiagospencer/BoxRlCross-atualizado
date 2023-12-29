/* eslint-disable no-undef */
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1.75rem;


  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  .produto {
    background: ${({ theme }) => theme.colors.gray600};
    padding: 1.5rem 1.5rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    h2 {
        margin-bottom: 10px;
    }

    .img{
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        border-bottom: 1px solid #ccc;
    }
    .img img {
      width: 90%;
      height: 350px;

    }

    .info {
        display: flex;
        flex-direction: column;
    }

    .info p {
        color: ${({ theme }) => theme.colors.gray300};
    }

    .info span {
        margin-top: 15px ;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.gray200};
    }
  }


`;
