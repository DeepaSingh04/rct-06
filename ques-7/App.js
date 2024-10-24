// App.js
import React from 'react';
import DynamicFocusForm from './DynamicFocusForm';
import RealTimeValidationForm from './RealTimeValidationForm';
import CustomSubmissionForm from './CustomSubmissionForm';

const App = () => {
  return (
    <div className="App">
      <DynamicFocusForm />
      <RealTimeValidationForm />
      <CustomSubmissionForm />
    </div>
  );
};

export default App;
