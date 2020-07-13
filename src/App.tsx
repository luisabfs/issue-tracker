import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './global/styles';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
