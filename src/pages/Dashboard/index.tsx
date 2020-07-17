import React from 'react';
import Lottie from 'lottie-react';
import animationData from 'assets/github.json';
import { Title, Container } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Title>Contribua no open-source!</Title>
    <div style={{ flex: 1 }}>
      <Lottie animationData={animationData} loop={false} />
    </div>
  </Container>
);

export default Dashboard;
