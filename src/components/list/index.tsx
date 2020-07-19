import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Container, Repositories, Dots } from './styles';

const RepoList: React.FC = () => (
  <Container>
    <Repositories>
      <a href="https://github.com/facebook/react">
        <img
          src="https://avatars2.githubusercontent.com/u/69631?s=200&v=4"
          alt="Facebook"
        />
        <div>
          <strong>facebook/react</strong>
          <p>
            A declarative, efficient, and flexible JavaScript library for
            building user interfaces.
          </p>
        </div>
        <FiChevronRight size={24} />
      </a>

      <a href="https://github.com/facebook/react">
        <img
          src="https://avatars2.githubusercontent.com/u/69631?s=200&v=4"
          alt="Facebook"
        />
        <div>
          <strong>facebook/react</strong>
          <p>
            A declarative, efficient, and flexible JavaScript library for
            building user interfaces.
          </p>
        </div>
        <FiChevronRight size={24} />
      </a>

      <a href="https://github.com/facebook/react">
        <img
          src="https://avatars2.githubusercontent.com/u/69631?s=200&v=4"
          alt="Facebook"
        />
        <div>
          <strong>facebook/react</strong>
          <p>
            A declarative, efficient, and flexible JavaScript library for
            building user interfaces.
          </p>
        </div>
        <FiChevronRight size={24} />
      </a>

      <a href="https://github.com/facebook/react">
        <img
          src="https://avatars2.githubusercontent.com/u/69631?s=200&v=4"
          alt="Facebook"
        />
        <div>
          <strong>facebook/react</strong>
          <p>
            A declarative, efficient, and flexible JavaScript library for
            building user interfaces.
          </p>
        </div>
        <FiChevronRight size={24} />
      </a>
    </Repositories>
    <Dots src="https://github.blog/wp-content/themes/github-blog/assets/images/dot-left-corner.png" />
  </Container>
);

export default RepoList;
