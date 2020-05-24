import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignInContainer from './components/SignIn/SignInContainer';
import SignUpContainer from './components/SignUp/SignUpContainer';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';
import { selectCurrentUser } from './redux/selectors/users.selector';

const App = ({ currentUser }: any) => {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/signin" />
        <Route
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/profile" /> : <SignInContainer />
          }
        />
        <Route
          path="/signup"
          render={() =>
            currentUser ? <Redirect to="/profile" /> : <SignUpContainer />
          }
        />
        <Route
          path="/profile"
          render={() =>
            currentUser ? <ProfilePageContainer /> : <Redirect to="/signin" />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default hot(module)(connect(mapStateToProps, null)(App));
