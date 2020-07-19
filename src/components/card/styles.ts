import styled from 'styled-components';

export const Repositories = styled.div`
  margin-top: 40px;
  max-width: 700px;
  background-color: red;

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

export const Dots = styled.div`
  background-image: url('https://github.blog/wp-content/themes/github-blog/assets/images/dot-left-corner.png');
  background-position: bottom;
  background-repeat: space;
`;
