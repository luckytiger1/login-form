import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignInContainer from './components/SignIn/SignInContainer';
import SignUpContainer from './components/SignUp/SignUpContainer';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/signin" />
        <Route path="/signin" component={SignInContainer} />
        <Route path="/signup" component={SignUpContainer} />
      </Switch>
    </div>
  );
};

export default hot(App);
