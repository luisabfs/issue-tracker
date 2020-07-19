import React from 'react';
import Lottie from 'lottie-react';

import animationData from 'assets/github.json';
import logo from 'assets/logo.svg';

import { Container, Wrapper, Title } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Wrapper>
      <img src={logo} alt="" />
      <Title>Contribute to open-source!</Title>
    </Wrapper>
    <Wrapper>
      <Lottie animationData={animationData} loop={false} />
    </Wrapper>
  </Container>
);

export default Dashboard;
