import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-top: 30px;
`;

export const Repositories = styled.div`
  max-width: 700px;

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

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      margin-right: 16px;

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
