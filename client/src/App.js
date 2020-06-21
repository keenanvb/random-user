import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';

import Alert from './components/alert/Alert'
import Navbar from './components/navbar/Navbar'
import Users from './components/users/Users'
import Profile from './components/profile/Profile'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route render={({ location }) => (
          <>
            <Navbar location={location} />
            <Alert />
            <section className="container">
              <Switch>
                <Route path='/' exact component={Users} />
                <Route path='/:name' exact component={Profile} />
              </Switch>

            </section>
          </>
        )} />
      </Router>
    </Provider>
  );
}

export default App;
