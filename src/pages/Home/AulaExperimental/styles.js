import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 740px;
  box-shadow: 0 4px 4px rgba(87,100,126,.21);
  border-radius: 20px;
  margin: 20px auto 40px auto;

  .description {
    font-weight: 500;
    font-size: 1.6rem;
    text-align: center;
    padding: 50px;
    line-height: 2.1rem;

    color: #54595F;
  }

  .title{
    background-color: #1d1d1d;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;

    h2 {
        font-size: 2rem;
        font-weight: 600;
        padding-bottom: 20px;
    }

    p{
        text-align: center;
        font-size: 1.2rem;
        color: #fff;
        line-height: 1.9rem;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: #9b9b9b;
    padding: 50px 0 40px 0;
  }

  form input {
    width: 81%;
    margin-bottom: 10px;
    padding-left: 8px;
    height: 35px;
    outline: none;
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02);
    color: #9b9b9b;
  }
  form input[type=text] {
    width: calc(80% / 2);
  }

  button {
    background-color: #19bb40;
    color: #FFF;
    padding: 15px 19px;
    border: none;
    border-radius: 8px;
     cursor: pointer;
    transition: background-color 0.2s;
  }

  button:hover{
    background-color: #16AA52;
    border: none;

  }
`;
