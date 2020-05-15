import React, { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';

const A = styled.a`
  text-decoration: none;
  font-size: 13px;
  color: #696969;
`;
const ItemWrapper = styled.div`
  padding-left: 2rem;
  text-align: left;
  padding-top: 0.5rem;
  &:hover {
    background-color: #dddddd;
  }
  padding-bottom: 0.5rem;
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
const Wrapper = styled.div`
  background-color: #eeeeee;
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-height: 10rem;
  overflow: scroll;
  ${(props) =>
    !props.menuData &&
    css`
      display: none;
    `}
`;

// let treedata = [
//   {
//     name: 'Cards',
//     isExpand: true,
//     isSelected: false,
//     item: [
//       {
//         name: 'Card Orders',
//         isExpand: true,
//         isSelected: false,
//         item: [
//           {
//             name: 'Query Card Orders List',
//             isExpand: false,
//             isSelected: false,
//           },
//           {
//             name: 'Query Get Order',
//             isExpand: false,
//             isSelected: false,
//           },
//         ],
//       },
//       {
//         name: 'Transactions',
//         isExpand: true,
//         isSelected: false,
//       },
//     ],
//   },
// ];
function removeSpace(string) {
  return string.replace(/\s/g, '').toLowerCase();
}
const SearchedMenu = ({ treedata, search }) => {
  const [menuData, setMenuData] = useState('');
  useEffect(() => {
    let result = [];
    if (!search) {
      setMenuData('');
      return;
    }
    treedata.map((firstchild) => {
      if (firstchild.name.toLowerCase().includes(search.toLowerCase())) {
        result.push({ name: firstchild.name, type: 'parent' });
      }
      if (firstchild.item) {
        firstchild.item = firstchild.item.map((seconddata) => {
          if (seconddata.name.toLowerCase().includes(search.toLowerCase())) {
            result.push({ name: seconddata.name, type: 'parent' });
          }

          if (seconddata.item) {
            seconddata.item = seconddata.item.map((thirddata) => {
              if (thirddata.name.toLowerCase().includes(search.toLowerCase())) {
                result.push({ name: thirddata.name, type: 'post' });
              }
              return thirddata;
            });
          }
          return seconddata;
        });
      }
      return firstchild;
    });
    setMenuData(result);
  }, [search, treedata]);

  return (
    <Wrapper menuData={menuData ? menuData.length : false}>
      {menuData &&
        menuData.map((item, index) => (
          <A href={`#${removeSpace(item.name)}`} key={index + 'se' + item.name}>
            <ItemWrapper>
              {item.type !== 'parent' ? <ApiType>{item.type}</ApiType> : ''}
              {item.name}
            </ItemWrapper>
          </A>
        ))}
    </Wrapper>
  );
};

export default SearchedMenu;
