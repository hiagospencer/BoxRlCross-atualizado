import style from "styled-components";

export const Container = style.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    background: rgba(0,0,0,.7);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 999;
    margin: 0 auto;

    img {
        width: 100%;
        max-width: 50%;
        max-height: 80%;
        border-radius: 10px;
    }



    button {
        position: fixed;
          top: 10px;
          right: 20px;
          font-size: 2.4rem;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          background: none;
          border: none;
    }

    @media (max-width: 768px) {
        display: none;
    }
 `;
