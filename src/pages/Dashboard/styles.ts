import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Logo = styled.img`
  align-self: flex-start;
`;

export const Title = styled.h1`
  color: #fafafa;
  font-size: 48px;
  margin-top: 40px;
  line-height: 56px;
`;

export const Form = styled.form`
  display: flex;
  max-width: 100%;
  margin-top: 60px;

  input {
    flex: 1;
    height: 50px;

    border: 0;
    color: #383838;
    padding: 0 20px;
    font-family: 'Montserrat', sans-serif;

    border-radius: 50px 0 0 50px;
  }

  button {
    width: 100px;
    height: 50px;

    color: #fafafa;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;

    border: 0;
    background-color: #56d0c9;
    border-radius: 0 50px 50px 0;
    transition: background-color 0.2s;

    &:hover {
      background-color: #4bb8b2;
    }
  }
`;

export const Repositories = styled.div`
  max-width: 650px;

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

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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

export const Dots = styled.img`
  margin-top: -40px;
  margin-left: 20px;
  align-self: flex-start;
`;
