import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';

import WelcomePanel from './components/WelcomePanel';

const App = () => {
  const [user, setUser] = useState('Gareth');

  return (
    <WelcomePanel
      setUser={setUser}
      user={user}
    />
  );
};

export default hot(App);
