import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import Brand from 'assets/brand.svg';

import { Header } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => (
  <Header>
    <img src={Brand} alt="Issue Tracker" />
    <Link to="/">
      <FiChevronLeft size={16} />
      Voltar
    </Link>
  </Header>
);

export default Repository;
