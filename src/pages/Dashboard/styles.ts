import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
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
  margin-top: 40px;
  line-height: 56px;
`;

export const Form = styled.form`
  display: flex;
  max-width: 100%;
  margin-top: 40px;

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
