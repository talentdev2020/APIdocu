import React, { useEffect } from 'react';
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

import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import IconDashboard from '@material-ui/icons/Dashboard';

import IconLibraryBooks from '@material-ui/icons/LibraryBooks';
import { useDispatch } from 'react-redux';
import { selectmenu } from '../../modules/collection';
const A = styled(Link)`
  text-decoration: none;
  font-size: 13px;
`;
const ApiType = styled.span`
  width: 32px;
  display: inline-block;
  height: 12px;
  line-height: 12px;
  background-color: #6bbd5b;
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
  ${(props) =>
    props.post &&
    css`
      background-color: #248fb2;
    `}
`;

function removeSpace(string) {
  return string.replace(/\s/g, '').toLowerCase();
}
const AppMenu = ({ treedata, selectedmenu }) => {
  const classes = useStyles();
  useEffect(() => {
    document.getElementById(selectedmenu + '_menu') &&
      document.getElementById(selectedmenu + '_menu').click();
  }, [selectedmenu]);
  function handleClick(e, string, isParent, isClicked) {
    if (isClicked) {
      const elements = document.getElementById('parent').children;
      for (let i = 0; i < parseInt(elements.length); i++) {
        const element = elements[i];
        if (element.id === removeSpace(string)) {
          console.log('find');
          window.scrollTo(
            0,
            element.getBoundingClientRect().top + window.scrollY + 30,
          );
        }
      }
    }

    const temp = treedata.map((firstchild) => {
      if (firstchild.name === string) {
        if (isParent) {
          firstchild.isExpand = !firstchild.isExpand;
        }
        console.log(isClicked);
        if (isClicked) firstchild.isExpand = true;
        firstchild.isSelected = true;
      } else {
        firstchild.isExpand = false;
        firstchild.isSelected = false;
      }

      if (firstchild.item) {
        firstchild.item = firstchild.item.map((seconddata) => {
          if (seconddata.name === string) {
            seconddata.isExpand = !seconddata.isExpand;
            seconddata.isSelected = true;
            firstchild.isExpand = true;
            if (isClicked) seconddata.isExpand = true;
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
    treedata = temp;

    // e.preventDefault();
  }
  return (
    <ReactShadowScroll
      style={{ height: 'calc(100vh - 18rem)' }}
      isShadow={false}
    >
      <List component="nav" className={classes.appMenu} disablePadding>
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
                    {firstdata.name !== 'introduction' && (
                      <>
                        {firstdata.isExpand ? (
                          <IconExpandLess />
                        ) : (
                          <IconExpandMore />
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
                                <IconLibraryBooks />
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
                                            post={
                                              thirddata.request.method ===
                                              'POST'
                                                ? true
                                                : false
                                            }
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
