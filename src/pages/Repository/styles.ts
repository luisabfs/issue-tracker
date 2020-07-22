import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    padding: 5px;
    color: #a8a8b3;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 4px;
    }

    &:hover {
      color: #fafafa;
    }
  }
`;

export const RepoInfo = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      text-align: center;

      strong {
        display: block;
        font-size: 36px;
      }

      span {
        display: block;
        margin-top: 4px;
      }

      & + li {
        margin-left: 40px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    display: flex;
    align-items: center;

    background-color: #fafafa;
    border-radius: 5px;
    width: 100%;
    padding: 20px;
    text-decoration: none;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    &:focus {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 18px;
        color: #383838;
      }

      p {
        color: #a8a8a8;
        font-size: 16px;
        margin-top: 5px;
      }
    }

    svg {
      margin-left: auto;
      color: #a8a8a8;
    }
  }
`;
