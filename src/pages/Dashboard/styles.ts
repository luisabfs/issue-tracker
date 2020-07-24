import styled from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const Logo = styled.img`
  align-self: flex-start;
`;

export const Title = styled.h1`
  color: #fafafa;
  font-size: 48px;
  margin-top: 140px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
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
    border: ${({ hasError }) => hasError && '2pt solid #f2c94c'};

    &::placeholder {
      color: #a8a8b3;
      letter-spacing: 0.21px;
      font-weight: 600;
    }
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

export const Error = styled.span`
  color: #f2c94c;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin-top: 8px;
  margin-left: 4px;
  display: block;
`;

export const Repositories = styled.div`
  max-width: 650px;
  display: flex;
  align-items: center;

  background-color: #fafafa;
  border-radius: 5px;
  width: 100%;
  padding: 20px;
  margin-top: 40px;

  transition: transform 0.2s;

  &:hover {
    transform: translateX(10px);
  }

  &:focus {
    transform: translateX(10px);
  }

  & + div {
    margin-top: 16px;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;

    &:first-of-type {
      flex: 1;
    }

    strong {
      font-size: 18px;
      color: #383838;
    }

    p {
      color: #a8a8a8;
      font-size: 16px;
      margin-top: 5px;
    }

    a {
      margin-top: 15px;
    }
  }

  svg {
    margin-left: auto;
    color: #a8a8a8;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export const Dots = styled.img`
  margin-top: -40px;
  margin-left: 20px;
  align-self: flex-start;
`;
