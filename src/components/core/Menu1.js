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
const treedata = [
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

const AppMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick(string) {
    setOpen(true);
  }
  return (
    <>
      <List component="nav" className={classes.appMenu} disablePadding>
        <A href="#introduction">
          <ListItem button className={classes.menuItem}>
            <ListItemIcon className={classes.menuItemIcon}>
              <IconDashboard />
            </ListItemIcon>
            <ListItemText inset primary="Introduction" />
          </ListItem>
        </A>
        <ListItem button onClick={handleClick} className={classes.menuItem}>
          <ListItemIcon className={classes.menuItemIcon}>
            <IconLibraryBooks />
          </ListItemIcon>
          <ListItemText primary="Cards" />
          {open ? <IconExpandLess /> : <IconExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Divider />
          <List component="div" disablePadding>
            <A href="#orderlist">
              <ListItem button className={classes.menuItem}>
                <ApiType>Get</ApiType>
                <ListItemText
                  inset
                  primary="Query Card Order List"
                ></ListItemText>
              </ListItem>
            </A>
            <A href="#orderbycard">
              <ListItem button className={classes.menuItem}>
                <ApiType post>Post</ApiType>
                <ListItemText
                  inset
                  primary="Query Card Order By ID"
                ></ListItemText>
              </ListItem>{' '}
            </A>
          </List>
        </Collapse>
      </List>
    </>
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
      backgroundColor: 'red!important',
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
