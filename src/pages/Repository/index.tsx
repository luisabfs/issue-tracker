import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiMinus } from 'react-icons/fi';

import api from 'services/api';
import Brand from 'assets/brand.svg';

import { Header, RepoInfo, Issues, Label } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  labels: Array<Label>;
  user: {
    login: string;
  };
}

interface Label {
  color: string;
  name: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function loadIssues(): Promise<void> {
      const [repo, { data }] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);
      console.log(data);
      setRepository(repo.data);
      setIssues(data);
    }

    loadIssues();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={Brand} alt="Issue Tracker" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>
      {repository && (
        <RepoInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Open Issues</span>
            </li>
          </ul>
        </RepoInfo>
      )}
      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url} target="_newblank">
            <div>
              <strong>{issue.title}</strong>
              <div>
                <p>{issue.user.login}</p>
                {issue.labels.length > 0 && <FiMinus />}
                {issue.labels.map(label => (
                  <Label style={{ backgroundColor: `#${label.color}` }}>
                    <h1>{label.name}</h1>
                  </Label>
                ))}
              </div>
            </div>
            <FiChevronRight size={24} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
