import styled from "styled-components";

export const Container = styled.section`
  max-width: 960px;

  margin: 20px auto 60px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cecece;

  .crossImg {
    margin: 20px 0;
  }

  .crossImg img {
    width: 100%;
  }

  .box-crossfit {
    display: flex;
    flex-wrap: wrap;

    width: 100%;

    margin-bottom: 60px;

    .img-crossfit {
      width: 25%;
      height: 100%;
    }

    .img-crossfit img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {

    .crossImg {
      width: 90%;
    }

    .box-crossfit {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;



      .img-crossfit {
        width: 50%;

        display: flex;
        flex-direction: row;
      }
    }

  }
`;
