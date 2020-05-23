import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignInContainer from './components/SignIn/SignInContainer';
import SignUpContainer from './components/SignUp/SignUpContainer';
import ProfilePage from './components/ProfilePage/ProfilePage';
import { selectCurrentUser } from './redux/selectors/users.selector';

const App = ({ currentUser }: any) => {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/signin" />
        {/* <Route exact path="/signin" component={SignInContainer} /> */}
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/profile" /> : <SignInContainer />
          }
        />
        <Route exact path="/signup" component={SignUpContainer} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default hot(module)(connect(mapStateToProps, null)(App));
