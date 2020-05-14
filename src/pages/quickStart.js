import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import './quick.css';
import { useRouteMatch, Route, Link, Switch } from 'react-router-dom';
import QuickStart from '../components/quick/QuickStart';
import Concept from '../components/quick/Concept';
import Inssuance from '../components/quick/Inssuance';
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  @media (max-width: 1200px) {
    width: 100%;
  }
  margin: auto;
`;
const menu = [
  {
    name: 'Quick start',
    active: true,
    path: '/quickStart',
  },
  {
    name: 'Quides',
    active: false,
    path: '/quickStart/guides',
    items: [
      {
        name: 'Key Concepts',
        active: false,
        path: '/quickStart/keyconcept',
      },
      {
        name: 'Card Issuance',
        active: false,
        path: '/quickStart/inssuance',
      },
      {
        name: 'Transactions',
        active: false,
        path: '/quickStart/transactions',
      },
    ],
  },
  {
    name: 'API Reference',
    active: false,
    path: '#',
    items: [
      {
        name: 'Core API',
        active: false,
        path: '/coreapi',
      },
      {
        name: 'Webhooks',
        active: false,
        path: '/coreapi#webhooks',
      },
    ],
  },
];
const CoreAPI = () => {
  const [data, setData] = useState(menu);
  const match = useRouteMatch();
  const handleClick = (name) => {
    const temp = data.map((item) => {
      if (item.name === name) item.active = true;
      else item.active = false;
      if (item.items) {
        item.items.map((child) => {
          if (child.name === name) child.active = true;
          else child.active = false;
          return child;
        });
      }
      return item;
    });
    setData(temp);
  };
  return (
    <Wrapper>
      <Grid container spacing={3}>
        <Grid item md={2}>
          <div className="sticky-top navigation-documentation">
            <div>
              <ul className="subnav-dark-60">
                {menu.map((item) => {
                  return (
                    <>
                      {' '}
                      <li
                        className={item.active ? 'active-true' : 'active-false'}
                        onClick={(e) => handleClick(item.name)}
                      >
                        <span className="vline"></span>
                        <Link to={item.path}>{item.name}</Link>
                      </li>
                      {item.items && (
                        <ul>
                          {item.items.map((child) => {
                            return (
                              <li
                                className={
                                  child.active ? 'active-true' : 'active-false'
                                }
                                onClick={(e) => handleClick(child.name)}
                              >
                                <span className="vline"></span>
                                <Link to={child.path}>{child.name}</Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item md={10}>
          <Switch>
            <Route path="/quickStart/keyconcept" component={Concept} />
            <Route
              path={`${match.path}quickStart/inssuance`}
              component={Inssuance}
            />

            <Route path={`${match.path}/transactions`} component={Concept} />
            <Route path={`${match.path}/quides`} component={Concept} />
            <Route path={`${match.path}`} component={QuickStart} />
          </Switch>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default CoreAPI;
