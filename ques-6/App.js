// App.js
import React from 'react';
import FocusInput from './FocusInput';
import UncontrolledInput from './UncontrolledInput';
import ColorChanger from './ColorChanger';

const App = () => {
  return (
    <div className="App">
      <FocusInput />
      <UncontrolledInput />
      <ColorChanger />
    </div>
  );
};

export default App;
