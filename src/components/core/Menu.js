import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
  const dispatch = useDispatch();
  useEffect(() => {
    document.getElementById(selectedmenu + '_menu') &&
      document.getElementById(selectedmenu + '_menu').click();
    // if (!selectedmenu.direction)
    //   if (!document.getElementById(selectedmenu.name + '_menu')) {
    //     let selectedparent = '';
    //     let selectedgrandparent = '';
    //     treedata.map((firstchild, index) => {
    //       if (removeSpace(firstchild.name) === selectedmenu) {
    //         if (index !== 1)
    //           selectedparent = removeSpace(treedata[index - 1].name);

    //         return firstchild;
    //       }
    //       if (firstchild.item) {
    //         firstchild.item = firstchild.item.map((seconddata) => {
    //           if (removeSpace(seconddata.name) === selectedmenu) {
    //             selectedparent = removeSpace(firstchild.name);

    //             return seconddata;
    //           }

    //           if (seconddata.item) {
    //             seconddata.item = seconddata.item.map((thirddata) => {
    //               if (selectedmenu === removeSpace(thirddata.name)) {
    //                 selectedparent = removeSpace(seconddata.name);
    //                 selectedgrandparent = removeSpace(firstchild.name);
    //               }
    //               return thirddata;
    //             });
    //           }
    //           return seconddata;
    //         });
    //       }

    //       return firstchild;
    //     });
    //     if (selectedgrandparent)
    //       document.getElementById(selectedgrandparent + '_menu') &&
    //         document
    //           .getElementById(selectedgrandparent + '_menu')
    //           .click(function () {
    //             console.log('secondclick');
    //             document.getElementById(selectedparent + '_menu') &&
    //               document
    //                 .getElementById(selectedparent + '_menu')
    //                 .click(function () {
    //                   console.log('thid');
    //                   document.getElementById(selectedmenu + '_menu') &&
    //                     document.getElementById(selectedmenu + '_menu').click();
    //                 });
    //           });
    //     else
    //       document.getElementById(selectedparent + '_menu') &&
    //         document
    //           .getElementById(selectedparent + '_menu')
    //           .click(function () {
    //             document.getElementById(selectedmenu + '_menu') &&
    //               document.getElementById(selectedmenu + '_menu').click();
    //           });
    //   }
    //dispatch(selectmenu(selectedmenu));
  }, [selectedmenu]);
  function handleClick(string, isParent = true) {
    treedata = treedata.map((firstchild) => {
      if (firstchild.name === string) {
        if (isParent) firstchild.isExpand = !firstchild.isExpand;
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
    dispatch(selectmenu(string));
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
                  to={`#${removeSpace(firstdata.name)}`}
                  key={index + firstdata.name}
                  onClick={() => handleClick(firstdata.name)}
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
                    {firstdata.name !== 'introduction' && firstdata.isExpand ? (
                      <IconExpandLess />
                    ) : (
                      <IconExpandMore />
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
                              onClick={() => handleClick(seconddata.name)}
                              to={`#${removeSpace(seconddata.name)}`}
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
                                        onClick={() =>
                                          handleClick(thirddata.name, false)
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
