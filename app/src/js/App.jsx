import React from 'react';

import AppStore from './AppStore';
import Routing from './Routing';

const App = () => (
  <AppStore>
    <Routing />
  </AppStore>
);

export default App;
