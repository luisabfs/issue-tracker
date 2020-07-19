import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Repositories, Dots } from './styles';

const Card: React.FC = () => (
  <Dots>
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
    </Repositories>
  </Dots>
);

export default Card;
