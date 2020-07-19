import React from 'react';
import Lottie from 'lottie-react';
import animationData from 'assets/github.json';

import { Container, Wrapper, Title, Form } from './styles';

const Header: React.FC = () => (
  <Wrapper>
    <Container>
      <Title>Contribute to open source projects!</Title>
      <Form>
        <input placeholder="Type the repo name" />
        <button type="submit">Search</button>
      </Form>
    </Container>
    <Container>
      <Lottie animationData={animationData} loop={false} />
    </Container>
  </Wrapper>
);

export default Header;
