import React, { useState } from 'react';
import styled from 'styled-components';
import './quick.css';
import { useRouteMatch, Route, Link, Switch, Redirect } from 'react-router-dom';
import QuickStart from '../components/quick/QuickStart';
import Concept from '../components/quick/Concept';
import Inssuance from '../components/quick/Inssuance';
import Integrations from '../components/quick/Integration';
// import Mobile from '../components/quick/Mobile';
import Transactions from '../components/quick/Transactions';
import Guides from '../components/quick/Guides';
import PCI from '../components/quick/PCI';
const Wrapper = styled.div`
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
    name: 'Guides',
    active: false,
    path: '/quickStart/guides',
    items: [
      {
        name: 'Key Concepts',
        active: false,
        path: '/quickStart/concept',
      },
      {
        name: 'Card Issuance',
        active: false,
        path: '/quickStart/issuance',
      },
      {
        name: 'Transactions',
        active: false,
        path: '/quickStart/transactions',
      },
      {
        name: 'PCI',
        active: false,
        path: '/quickStart/pci',
      },
      {
        name: 'Integrations',
        active: false,
        path: '/quickStart/integrations',
      },
    ],
  },
  {
    name: 'API Reference',
    active: false,
    path: '',
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

      {
        name: 'Mobile API',
        active: false,
        path: '/quickStart/mobile',
      },
    ],
  },
  {
    name: 'Btasg SDKs',
    active: false,
    path: '/coreApi',
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
      <div
        style={{ textAlign: 'left', paddingLeft: '18px', marginBottom: '2rem' }}
      >
        <img src="/logo.png" alt="Logo" width="130px" />
      </div>
      <div style={{ display: 'flex' }}>
        <div className="sticky-top navigation-documentation">
          <br />
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
                      {item.name === 'API Reference' ? (
                        item.name
                      ) : (
                        <Link to={item.path}>{item.name}</Link>
                      )}
                    </li>
                    {item.items && (
                      <ul>
                        {item.items.map((child, index) => {
                          return (
                            <li
                              key={index + child.name}
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

        <div className="quick-content">
          <Switch>
            <Route
              path={`${match.path}quickStart/issuance`}
              component={Inssuance}
              exact
            />

            <Route
              path={`${match.path}quickStart/concept`}
              component={Concept}
              exact
            />
            <Route
              path={`${match.path}quickStart/inssuance`}
              component={Inssuance}
              exact
            />
            <Route
              path={`${match.path}quickStart/guides`}
              component={Guides}
              exact
            />

            <Route
              path={`${match.path}quickStart/transactions`}
              component={Transactions}
              exact
            />
            <Route path={`${match.path}quickStart/pci`} component={PCI} exact />
            <Route
              path={`${match.path}quickStart/integrations`}
              component={Integrations}
              exact
            />
            <Route path={`${match.path}`} component={QuickStart} exact />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Wrapper>
  );
};

export default CoreAPI;
