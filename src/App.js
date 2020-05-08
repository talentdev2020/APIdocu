import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom'
import CoreAPI from './pages/coreApi'
import QuickStart from './pages/quickStart'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ul>
           <li>
             <Link to='/quickStart'>Quick Start page</Link>
           </li>
           <li>
             <Link to='/coreApi'>Core API</Link>
           </li>
         </ul>
         <Switch>
           <Route path={['/','/quickStart']} component={QuickStart} exact />
           <Route path='/coreApi' component={CoreAPI} exact/>
         </Switch>
      </header>
    </div>
  );
}

export default App;
