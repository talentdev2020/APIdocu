import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CoreAPI from './pages/coreApi';
import { getdata } from './modules/collection';
import QuickStart from './pages/quickStart';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getdata());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <header className="App-header"></header>
      <Switch>
        <Route path="/coreApi" component={CoreAPI} exact />

        <Route path={['/', '/quickStart']} component={QuickStart} />
      </Switch>
      <div className="containter">
        © 2020 Venus Payments, Inc. All rights reserved.
      </div>{' '}
    </div>
  );
}

export default App;
