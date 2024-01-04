/* eslint-disable no-undef */
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  margin-bottom: 40px;

  .product-card {
    width: 100%;
    max-width: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  .card__image {
    width: 80%;
    height: 250px;
    margin: 0 auto;
  }

  .card__infos {
    padding: 20px;
    border-top: 1px solid #ddd;

  }

  .card__name {
    font-size: 1.4rem;
    font-weight: 400;
    display: block;
    margin-bottom: 15px;
    color: black;
  }

  .card__title {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    line-height: 1.5;
    font-weight: 500;
  }

  .cart-buy {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cart-buy .card__price {
    font-size: 20px;
    font-weight: 500;
    margin-top: 10px;
    color: black;
    margin-left: 10px;
  }

  .button__add-cart {
    width: 45px;
    height: 45px;
    margin: 12px 15px;
    color: #0c5dd6;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.8);
    font-size: 1.5rem;
    cursor: pointer;
  }

  .product-card:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  /* .product-card:hover .button__add-cart{
    display: flex;
  } */

  gap: 1.75rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  /* .produto {
    background: ${({ theme }) => theme.colors.gray600};
    padding: 1.5rem 1.5rem;
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    h2 {
      margin-bottom: 10px;
    }

    .img {
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
      margin-top: 15px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.gray200};
    }
  } */
`;
