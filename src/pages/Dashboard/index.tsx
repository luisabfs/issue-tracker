import React from 'react';
import Lottie from 'lottie-react';

import animationData from 'assets/github.json';
import logo from 'assets/logo.svg';

import { Container, Wrapper, Logo, Title, Form } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Logo src={logo} alt="Issue Tracker" />
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
  </Container>
);

export default Dashboard;
