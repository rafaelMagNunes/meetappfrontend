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

    button {
      width: 142px;
      height: 42px;
      background: #f94d6a;
      border: none;
      border-radius: 4px;

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
    }
  }

  ul {
    margin-top: 40px;

    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-left: 15px;
      padding-right: 15px;
      margin-top: 10px;
      border-radius: 4px;
      height: 62px;
      background: rgba(0, 0, 0, 0.1);

      h4 {
        color: #fff;
        font-size: 18px;
      }

      aside {
        display: flex;
        flex-direction: row;

        p {
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
`;
