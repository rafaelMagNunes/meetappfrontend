import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 70px auto;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h2 {
      color: #fff;
      font-size: 32px;
    }

    aside {
      button {
        width: 142px;
        height: 42px;
        background: #f94d6a;
        border: none;
        border-radius: 4px;
        margin-left: 10px;

        a {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-style: none;

          p {
            margin-left: 5px;
          }
        }

        p {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-style: none;

          p {
            margin-left: 5px;
          }
        }
      }

      button:nth-child(1) {
        background: #4dbaf9;
      }
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;

  img {
    height: 300px;
    width: 940px;
    border-radius: 4px;
    margin-bottom: 15px;
  }

  h4 {
    color: white;
    margin-bottom: 15px;
  }

  footer {
    display: flex;
    flex-direction: row;

    span {
      margin-right: 10px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;
