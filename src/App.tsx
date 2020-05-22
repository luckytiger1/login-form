import React from 'react';
import { hot } from 'react-hot-loader/root';
import FormInput from './components/FormInput/FormInput';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FormInput />
      </header>
    </div>
  );
};

export default hot(App);
