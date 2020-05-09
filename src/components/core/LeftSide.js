import React, { Component } from 'react';
import styled, { css } from 'styled-components';

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
const Ul = styled.ul`
  font-family: Montserrat;
  font-size: 15px;
  overflow: hidden !important;
  overflow-anchor: none;
  touch-action: auto;
  font-weight: 300;
  line-height: 28px;
  color: #2a2f45;
  opacity: 0.9;
  position: relative;
  padding-left: 0px;
  text-align: left;
  text-rendering: optimizeSpeed !important;
  text-size-adjust: 100%;
`;
const LetfWrapper = styled.div`
width: 260px;

@media (max-width: 768px) {
     
      display: none;
    
`;
const Li = styled.li`
  cursor: pointer;
  color: #2d292a;
  margin: 0;
  padding: 12.5px 20px;
  font-family: Montserrat;
  text-transform: none;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  &:hover {
    background-color: rgb(242, 242, 242);
  }
  &:active {
    background-color: rgb(242, 242, 242);
  }
`;
const LiExpand = styled.li`
  cursor: pointer;
  color: #2d292a;
  margin: 0;
  padding: 12.5px 20px;
  font-family: Montserrat;
  text-transform: none;
  list-style-type: none;
  &:hover {
    background-color: unset;
  }
  &:active {
    background-color: unset;
  }
`;
const ApiLabel = styled.span`
  background-color: #6bbd5b;
  width: 32px;
  display: inline-block;
  height: 12px;
  line-height: 12px;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-position: 6px 4px;
  font-size: 9px;
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
  ${(props) =>
    props.put &&
    css`
      background-color: #9b708b;
    `}
`;
const Svg = styled.svg`
  height: 1.5em;
  width: 1.5em;
`;
export default class Page extends Component {

    const ExpandChild=(){
        alert("Erorr");
    }
  render() {
    return (
      <LetfWrapper>
        <img src="logo-header.svg" alt="Logo" />
        <div role="search" style={{ marginBottom: '20px', marginTop: '50px' }}>
          <SearchIcon
            class=" search-icon"
            version="1.1"
            viewBox="0 0 1000 1000"
            x="0px"
            xmlns="http://www.w3.org/2000/svg"
            y="0px"
          >
            <path d="M968.2,849.4L667.3,549c83.9-136.5,66.7-317.4-51.7-435.6C477.1-25,252.5-25,113.9,113.4c-138.5,138.3-138.5,362.6,0,501C219.2,730.1,413.2,743,547.6,666.5l301.9,301.4c43.6,43.6,76.9,14.9,104.2-12.4C981,928.3,1011.8,893,968.2,849.4z M524.5,522c-88.9,88.7-233,88.7-321.8,0c-88.9-88.7-88.9-232.6,0-321.3c88.9-88.7,233-88.7,321.8,0C613.4,289.4,613.4,433.3,524.5,522z"></path>
          </SearchIcon>
          <SearchInput type="text" value="" placeholder="Search..." />
        </div>
        <Ul>
          <LiExpand>
            <Li onClick ={(e)=>ExpandChild(e)}>
              Cards
              <Svg
                class="sc-jTzLTM hjRNaf"
                version="1.1"
                viewBox="0 0 24 24"
                x="0"
                xmlns="http://www.w3.org/2000/svg"
                y="0"
              >
                <polygon points="17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "></polygon>
              </Svg>
            </Li>
            <Ul>
              <LiExpand>
                <Li>Card Orders</Li>
                <Ul>
                  <Li>
                    <ApiLabel>post</ApiLabel>
                    Get Card Linst
                  </Li>
                </Ul>
              </LiExpand>

              <Li>Get Card Linst</Li>
              <Li>Get Card Linst</Li>
            </Ul>
          </LiExpand>
        </Ul>
      </LetfWrapper>
    );
  }
}
