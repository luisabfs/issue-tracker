import React from 'react';
import logo from 'assets/logo.svg';

import { RepoList, Header } from 'components';
import { Container, Logo } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Logo src={logo} alt="Issue Tracker" />
    <Header />
    <RepoList />
  </Container>
);

export default Dashboard;
