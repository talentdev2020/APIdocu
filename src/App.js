import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import CoreAPI from './pages/coreApi';
import QuickStart from './pages/quickStart';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/quickStart">Quick Start page</Link>

        <Link to="/coreApi">Core API</Link>
      </header>
      <Switch>
        <Route path={['/', '/quickStart']} component={QuickStart} exact />
        <Route path="/coreApi" component={CoreAPI} exact />
      </Switch>
      <div className="containter">
        © 2019 Apto Payments, Inc. All rights reserved.
      </div>{' '}
    </div>
  );
}

export default App;
