import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import styled, { css } from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';

import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import IconDashboard from '@material-ui/icons/Dashboard';

import IconLibraryBooks from '@material-ui/icons/LibraryBooks';

const A = styled.a`
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
let treedata = [
  {
    name: 'Cards',
    isExpand: true,
    isSelected: false,
    item: [
      {
        name: 'Card Orders',
        isExpand: true,
        isSelected: false,
        item: [
          {
            name: 'Query Card Orders List',
            isExpand: false,
            isSelected: false,
          },
          {
            name: 'Query Get Order',
            isExpand: false,
            isSelected: false,
          },
        ],
      },
      {
        name: 'Transactions',
        isExpand: true,
        isSelected: false,
      },
    ],
  },
];
function removeSpace(string) {
  return string.replace(/\s/g, '');
}
const AppMenu = () => {
  const classes = useStyles();
  function handleClick(string, isParent = true) {
    treedata = treedata.map((firstchild) => {
      if (firstchild.name === string) {
        if (isParent) firstchild.isExpand = !firstchild.isExpand;
        firstchild.isSelected = true;
      } else firstchild.isSelected = false;
      if (firstchild.item) {
        firstchild.item = firstchild.item.map((seconddata) => {
          if (seconddata.name === string) {
            seconddata.isExpand = !seconddata.isExpand;
            seconddata.isSelected = true;
          } else seconddata.isSelected = false;

          if (seconddata.item) {
            seconddata.item = seconddata.item.map((thirddata) => {
              if (string === thirddata.name) {
                thirddata.isSelected = true;
              } else thirddata.isSelected = false;
              return thirddata;
            });
          }
          return seconddata;
        });
      }

      return firstchild;
    });
    console.log(treedata);
  }
  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {treedata &&
        treedata.map((firstdata, index) => {
          return (
            <div key={index}>
              <A
                href={`#${removeSpace(firstdata.name)}`}
                key={index + firstdata.name}
                onClick={() => handleClick(firstdata.name)}
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
                  {firstdata.isExpand ? <IconExpandLess /> : <IconExpandMore />}
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
                            href={`#${removeSpace(seconddata.name)}`}
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
                                      href={`#${removeSpace(thirddata.name)}`}
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
                                        <ApiType post>Post</ApiType>
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
