import React, { useEffect, useRef } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import styled, { css } from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ReactShadowScroll from 'react-shadow-scroll';

import IconDashboard from '@material-ui/icons/List';

import IconLibraryBooks from '@material-ui/icons/MenuBook';
const A = styled(Link)`
  text-decoration: none;
  font-size: 13px;
`;
const ApiType = styled.span`
  width: 32px;
  display: inline-block;
  height: 12px;
  line-height: 12px;
  background-color: green;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-position: 6px 4px;
  font-size: 7px;
  font-family: Verdana;
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  margin-right: 6px;
  margin-top: 2px;
  ${(props) => {
    if (props.post === 'POST')
      return css`
        background-color: #dada1c;
      `;
    if (props.post === 'PUT')
      return css`
        background-color: blue;
      `;
    if (props.post === 'DELETE')
      return css`
        background-color: red;
      `;
  }}
`;

function removeSpace(string) {
  return string.replace(/\s/g, '').toLowerCase();
}
const AppMenu = ({ treedata, selectedmenu, hash }) => {
  const classes = useStyles();
  let flag = useRef(0);

  useEffect(() => {
    document.getElementById(selectedmenu + '_menu') &&
      document.getElementById(selectedmenu + '_menu').click();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [treedata]);
  const mouseDown = () => {
    flag.current = 1;
  };

  function handleClick(e, string, isParent, isClicked) {
    const temp = treedata.map((firstchild) => {
      if (firstchild.name === string) {
        if (isParent) {
          if (flag.current === 1) firstchild.isExpand = !firstchild.isExpand;
        }
        if (!flag.current) firstchild.isExpand = true;
        firstchild.isSelected = true;
      } else {
        firstchild.isExpand = false;
        firstchild.isSelected = false;
      }

      if (firstchild.item) {
        firstchild.item = firstchild.item.map((seconddata) => {
          if (seconddata.name === string) {
            if (flag.current) seconddata.isExpand = !seconddata.isExpand;
            else seconddata.isExpand = true;
            seconddata.isSelected = true;
            firstchild.isExpand = true;
          } else {
            seconddata.isSelected = false;
            seconddata.isExpand = false;
          }

          if (seconddata.item) {
            seconddata.item = seconddata.item.map((thirddata) => {
              if (string === thirddata.name) {
                thirddata.isSelected = true;
                firstchild.isExpand = true;
                seconddata.isExpand = true;
              } else thirddata.isSelected = false;
              return thirddata;
            });
          }
          return seconddata;
        });
      }
      return firstchild;
    });
    flag.current = 0;
    if (isClicked) {
      const elements = document.getElementById('parent').children;
      for (let i = 0; i < parseInt(elements.length); i++) {
        const element = elements[i];
        if (element.id === removeSpace(string)) {
          window.scrollTo(
            0,
            element.getBoundingClientRect().top + window.scrollY + 30,
          );
        }
      }
    }
    treedata = temp;

    // e.preventDefault();
  }

  return (
    <ReactShadowScroll
      style={{ height: 'calc(100vh - 18rem)' }}
      isShadow={false}
    >
      <List
        component="nav"
        className={classes.appMenu}
        disablePadding
        onMouseDown={mouseDown}
      >
        {treedata &&
          treedata.map((firstdata, index) => {
            return (
              <div key={index}>
                <A
                  key={index + firstdata.name}
                  to={`#${removeSpace(firstdata.name)}`}
                  onClick={(e) => handleClick(e, firstdata.name, true, true)}
                  id={`${removeSpace(firstdata.name)}_menu`}
                >
                  <ListItem
                    button
                    className={
                      firstdata.isSelected
                        ? classes.selected + ' ' + classes.menuItem
                        : classes.menuItem
                    }
                  >
                    <ListItemIcon className={classes.menuItemIcon}>
                      <IconDashboard />
                    </ListItemIcon>

                    <ListItemText inset primary={firstdata.name}></ListItemText>
                    {firstdata.name !== 'Introduction' && (
                      <>
                        {firstdata.isExpand ? (
                          <svg
                            className="collapse notransition"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                          </svg>
                        ) : (
                          <svg
                            className="collapse transition"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                          </svg>
                        )}
                      </>
                    )}
                  </ListItem>
                </A>
                {firstdata.item && (
                  <Collapse
                    key={index + 'seconde' + firstdata.item.name}
                    in={firstdata.isExpand}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Divider />
                    <List component="div" disablePadding>
                      {firstdata.item.map((seconddata, index1) => {
                        return (
                          <div key={index1 + seconddata.name}>
                            <A
                              to={`#${removeSpace(seconddata.name)}`}
                              onClick={(e) =>
                                handleClick(e, seconddata.name, true, true)
                              }
                              id={`${removeSpace(seconddata.name)}_menu`}
                              key={index1 + 'a' + seconddata.name}
                            >
                              <ListItem
                                button
                                className={
                                  seconddata.isSelected
                                    ? classes.selected +
                                      ' ' +
                                      classes.secondmenuItem
                                    : classes.secondmenuItem
                                }
                              >
                                <IconLibraryBooks
                                  style={{
                                    width: '0.8em',
                                    marginRight: '0.4rem',
                                  }}
                                />
                                <ListItemText
                                  inset
                                  primary={seconddata.name}
                                ></ListItemText>
                              </ListItem>
                            </A>
                            {seconddata.item && (
                              <Collapse
                                in={seconddata.isExpand}
                                timeout="auto"
                                key={index1 + 'ca' + seconddata.name}
                                unmountOnExit
                              >
                                <List component="div" disablePadding>
                                  {seconddata.item.map((thirddata) => {
                                    return (
                                      <A
                                        to={`#${removeSpace(thirddata.name)}`}
                                        id={`${removeSpace(
                                          thirddata.name,
                                        )}_menu`}
                                        key={thirddata.name}
                                        onClick={(e) =>
                                          handleClick(
                                            e,
                                            thirddata.name,
                                            false,
                                            true,
                                          )
                                        }
                                      >
                                        <ListItem
                                          button
                                          className={
                                            thirddata.isSelected
                                              ? classes.selected +
                                                ' ' +
                                                classes.thirdmenuItem
                                              : classes.thirdmenuItem
                                          }
                                        >
                                          <ApiType
                                            post={thirddata.request.method}
                                          >
                                            {thirddata.request.method}
                                          </ApiType>
                                          <ListItemText
                                            inset
                                            primary={thirddata.name}
                                          ></ListItemText>
                                        </ListItem>
                                      </A>
                                    );
                                  })}
                                </List>
                              </Collapse>
                            )}
                          </div>
                        );
                      })}
                    </List>
                  </Collapse>
                )}
              </div>
            );
          })}
      </List>
    </ReactShadowScroll>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
      fontSize: '14px!important',
    },
    menuItem: {
      width: drawerWidth,
      color: '#000',
    },
    selected: {
      backgroundColor: '#efefef!important',
    },
    thirdmenuItem: {
      paddingLeft: '4rem!important',
    },
    secondmenuItem: {
      color: '#97c05c',
      paddingLeft: '3rem!important',
    },

    menuItemIcon: {
      color: '#97c05c',
    },
  }),
);

export default AppMenu;
