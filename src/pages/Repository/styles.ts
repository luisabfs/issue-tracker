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

export const Logo = styled.img``;
