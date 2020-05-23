import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import SearchedMenu from './SearchedMenu';
import { useDispatch } from 'react-redux';
import { selectmenu } from '../../modules/collection';

const SearchInput = styled.input`
  width: calc(100% - 40px);
  box-sizing: border-box;
  margin: 0 20px;
  padding: 5px 10px 5px 20px;
  border: 0;
  border-bottom: 1px solid #e6e6e6;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 13px;
  color: #2d292a;
  background-color: transparent;
  outline: none;
`;
const SearchIcon = styled.svg`
  position: absolute;
  left: 20px;
  height: 1.8em;
  width: 0.9em;
`;

const LetfWrapper = styled.div`
width: 320px;
 
@media (max-width: 768px) {
     
      display: none;
    
`;
function removeSpace(string) {
  return string.replace(/\s/g, '').toLowerCase();
}
const LeftSide = ({ data, selectedmenu, hash }) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const [menu, setMenu] = useState();

  useEffect(() => {
    const newelement = { name: 'Introduction', type: 'parent' };
    let temp = [newelement].concat(data);
    temp.map((firstchild, index) => {
      if (firstchild.item) {
        firstchild.item = firstchild.item.map((seconddata, secondindex) => {
          if (seconddata.item) {
            seconddata.item.map((thirddata, thirdindex) => {
              if (selectedmenu === removeSpace(thirddata.name)) {
                temp[index].isExpand = true;
                temp[index].item[secondindex].isExpand = true;
              }
              if (selectedmenu === removeSpace(seconddata.name)) {
                temp[index].isExpand = true;
                temp[index].isSlected = true;
              }
              return thirddata;
            });
          }
          return seconddata;
        });
      }
      return firstchild;
    });

    setMenu(temp);
  }, [data, selectedmenu]);
  useEffect(() => {
    dispatch(selectmenu(hash));
  }, [hash, dispatch]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <LetfWrapper>
      <div
        style={{ position: 'fixed', textAlign: 'left', paddingLeft: '1rem' }}
      >
        <Link to="/quickStart">
          <img
            src="logo.png"
            alt="Logo"
            width="130px"
            style={{ paddingLeft: '3rem' }}
          />
        </Link>
        <div
          role="search"
          style={{
            position: 'relative',
            marginBottom: '2.5rem',
            marginTop: '3rem',
          }}
        >
          <SearchIcon
            version="1.1"
            viewBox="0 0 1000 1000"
            x="0px"
            xmlns="http://www.w3.org/2000/svg"
            y="0px"
          >
            <path d="M968.2,849.4L667.3,549c83.9-136.5,66.7-317.4-51.7-435.6C477.1-25,252.5-25,113.9,113.4c-138.5,138.3-138.5,362.6,0,501C219.2,730.1,413.2,743,547.6,666.5l301.9,301.4c43.6,43.6,76.9,14.9,104.2-12.4C981,928.3,1011.8,893,968.2,849.4z M524.5,522c-88.9,88.7-233,88.7-321.8,0c-88.9-88.7-88.9-232.6,0-321.3c88.9-88.7,233-88.7,321.8,0C613.4,289.4,613.4,433.3,524.5,522z"></path>
          </SearchIcon>
          <SearchInput
            type="text"
            value={search}
            placeholder="Search..."
            onChange={(e) => handleSearch(e)}
          />
        </div>
        {/* <Left /> */}
        {/* <MuiTreeView
          tree={tree}
          onParentClick={handleClick}
          onLeafClick={handleClick}
        /> */}
        {search && <SearchedMenu treedata={menu} search={search} />}

        <Menu treedata={menu} selectedmenu={selectedmenu} hash={hash} />
        <Divider />
      </div>
    </LetfWrapper>
  );
};
export default LeftSide;
