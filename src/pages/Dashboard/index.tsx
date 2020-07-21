import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';

import logo from 'assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

import animationData from 'assets/github.json';
import api from 'services/api';

import {
  Container,
  Wrapper,
  Logo,
  Title,
  Form,
  Error,
  Repositories,
} from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState<string>();
  const [inputError, setInputError] = useState<string>();
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storage = localStorage.getItem('@IssueTracker:repositories');

    if (storage) return JSON.parse(storage);

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@IssueTracker:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function addRepo(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Please, insert the repository name');
      return;
    }

    try {
      const { data } = await api.get<Repository>(`repos/${newRepo}`);
      setRepositories([data, ...repositories]);

      setNewRepo('');
    } catch (error) {
      setInputError('Error searching for the repository');
    }
  }

  return (
    <Container>
      <Logo src={logo} alt="Issue Tracker" />
      <Wrapper>
        <Container>
          <Title>Contribute to open source projects!</Title>
          <Form hasError={!!inputError} onSubmit={addRepo}>
            <input
              placeholder="author/repo-name"
              value={newRepo || ''}
              onChange={event => {
                setInputError('');
                setNewRepo(event.target.value);
              }}
            />
            <button type="submit">Search</button>
          </Form>
          {inputError && <Error>{inputError}</Error>}
        </Container>
        <Container>
          <Lottie animationData={animationData} loop={false} />
        </Container>
      </Wrapper>
      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description || 'No description'}</p>
            </div>
            <FiChevronRight size={24} />
          </Link>
        ))}
      </Repositories>
    </Container>
  );
};

export default Dashboard;
