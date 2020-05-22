import React from 'react';
import { hot } from 'react-hot-loader/root';
// import FormInput from './components/FormInput/FormInput';
import SignIn from './components/SignIn/SignIn';

const App = () => {
  return (
    <div className="App">
      <SignIn />
    </div>
  );
};

export default hot(App);
