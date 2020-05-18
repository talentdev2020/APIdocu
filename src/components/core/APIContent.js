import React, { useEffect, useState } from 'react';
import Divider from '@material-ui/core/Divider';
import styled, { css } from 'styled-components';
import VerificationSection from './verification';
import Updatecardorder from './subpages/Updatecardorder';
import Createcardorder from './subpages/Createcardorder';
import Cardtransactions from './subpages/Cardtransactions';
import Updateentitycard from './subpages/Updateentitycard';
import SuccessResponse from './SuccessResponse';
import descriptions from '../../lib/config';
import {
  ParamBody,
  ParamDescription,
  ParamDescriptionTitle,
  TreeArrow,
} from './SuccessResponse';
const Th = styled.th`
  font-weight: 500;
  padding: 1rem 0.5rem;
`;
const ParamTitle = styled.div`
  font-weight: 300;
  display: inline-block;
  width: 15rem;
  cursor: pointer;
  color: black !important;
`;
const Param = styled.div`
  display: flex;

  padding-top: 6px;

  border-left: 1px solid #2623d0;
  &:last-child:first-child {
    background: none;
    border-left-color: transparent;
    border-left-width: 0px;
  }
  &:first-child {
    padding-top: 6px;

    background-image: linear-gradient(
      transparent 0%,
      transparent 22px,
      rgb(38, 35, 208) 22px,
      rgb(38, 35, 208) 100%
    );
    border-left-width: 0px;

    background-size: 1px 100%;
    background-position: left top;
    background-repeat: no-repeat;
  }
  &:last-child {
    padding-top: 6px;
    background-size: 1px 100%;
    border-left-width: 0px;
    background-repeat: no-repeat;
    background-image: linear-gradient(
      to bottom,
      #2623d0 0%,
      #2623d0 22px,
      transparent 22px,
      transparent 100%
    );
  }
`;
const except = [
  'Create Card Orders',
  'Update Card Order',
  'Risk',
  'Card Transactions',
  'Update Entity Card',
];

const Td = styled.td`
  border-bottom: 1px solid #c4c4d6;
  color: #02152f;
  padding: 1rem 0.5rem;
`;

const GreenWrapper = styled.span`
  font-size: 0.929em;
  line-height: 20px;
  background-color: #6bbd5b;
  color: #ffffff;
  padding: 3px 10px;
  text-transform: uppercase;
  margin: 0;
  margin-right: 1rem;
  ${(props) =>
    props.post &&
    css`
      background-color: #248fb2;
    `}
`;

const ApiBody = styled.div`
  margin-bottom: 15px;
  word-break: break-all;
  border: 1px solid #e6e6e6;
  padding: 6px 10px;
  border-radius: 3px;
  font-size: 12px;
  color: #282828;
  background-color: #f8f8f8;
`;
const Description = styled.div`
  color: #969696;
  margin-top: 1rem;
`;
const MainCategory = styled.h3`
  color: #01005a;
`;
const SubCategory = styled.h3`
  color: #01525a;
`;
function removeSpace(string) {
  return string.replace(/\s/g, '').toLowerCase();
}
const APIContent = ({ response, request, type, name, description }) => {
  const [postBody, setPostBody] = useState();
  const [descriptionTitle, setDescriptionTitle] = useState('');
  const [descriptionTableTitle, setDescriptionTableTitle] = useState('');
  const [descriptionTableBody, setDescriptionTableBody] = useState('');
  useEffect(() => {
    if (description && description.includes('**')) {
      let tables = [];
      let tabletitles = [];

      const n = description.indexOf('**');
      const temp = description.substr(0, n);
      setDescriptionTitle(temp.split('.)').join('.').split('.'));

      const m = description.indexOf('**', n + 2);
      tabletitles.push(description.substring(n, m + 1));
      const tablestart = description.indexOf('---------', m + 1);
      let tableend = description.indexOf('**', m + 2);
      if (tableend === -1) tableend = description.length;
      const tablebodystring = description.substring(tablestart, tableend);
      const tablebody = tablebodystring.split('\n').join('|').split('|');
      let temp_arr = [];
      for (let i = 0; i < tablebody.length; i = i + 3)
        if (!tablebody[i].includes('------'))
          temp_arr.push({
            id: tablebody[i],
            value: tablebody[i + 1],
            type: tablebody[i + 2],
          });
      tables.push(temp_arr);
      if (tableend !== description.length) {
        const n1 = description.indexOf('**', tableend);
        const m1 = description.indexOf('**', n1 + 1);
        tabletitles.push(description.substring(n1, m1 + 1));
        const tablestart1 = description.indexOf('---------', m1 + 1);
        let tableend1 = description.indexOf('**', m1 + 1);
        if (tableend1 === -1) tableend1 = description.length;
        const tablebodystring1 = description.substring(tablestart1, tableend1);
        const tablebody1 = tablebodystring1
          ? tablebodystring1.split('\n').join('|').split('|')
          : [];
        temp_arr = [];

        for (let i = 0; i < tablebody1.length; i = i + 3)
          temp_arr.push({
            id: tablebody1[i],
            value: tablebody1[i + 1],
            type: tablebody1[i + 2],
          });
        tables.push(temp_arr);
      }
      setDescriptionTableTitle(tabletitles);
      setDescriptionTableBody(tables);
    }
  }, [description]);
  useEffect(() => {
    if (request && request.method === 'POST') {
      try {
        const temp = JSON.parse(request.body.raw);
        const temp_arr = Object.keys(temp);
        let arr = [];

        // if (temp_arr.length > 17) {
        //   setPostBody([]);
        //   return;
        // }
        temp_arr.map((item) => {
          try {
            return arr.push({ key: item, value: temp[item] });
          } catch (e) {
            return 'Array';
          }
        });
        setPostBody(arr);
      } catch (e) {
        setPostBody('');
      }
    }
  }, [request]);
  return (
    <>
      {type === 'parent' && <MainCategory>{name}</MainCategory>}
      {type === 'subparent' && <SubCategory>{name}</SubCategory>}
      {type === 'api' && (
        <>
          <h3>{name}</h3>
          <ApiBody>
            <GreenWrapper post={request.method === 'GET' ? false : true}>
              {request.method}
            </GreenWrapper>
            {request.url.raw ? request.url.raw : request.url}
          </ApiBody>
        </>
      )}
      {name === 'Update Card Order' && <Updatecardorder />}
      {name === 'Create Card Orders' && <Createcardorder />}
      {name === 'Card Transactions' && <Cardtransactions />}
      {name === 'Update Entity Card' && <Updateentitycard />}
      {name === 'Risk' && <VerificationSection />}
      {!except.includes(name) && (
        <Description>
          {descriptionTitle ? '' : description}
          {descriptionTitle &&
            descriptionTitle.map((line, index) => {
              if (index === 0) return <p key={index + 'line'}>{line}</p>;
              else return <div key={index + 'line'}>{line}</div>;
            })}
          {descriptionTableTitle.length > 0 &&
            descriptionTableTitle.map((title, index) => {
              return (
                <>
                  <p key={'title' + index}>
                    <strong>{title}</strong>
                  </p>
                  <table
                    style={{
                      overflowX: 'auto',
                      width: '100%',
                      display: 'block',
                    }}
                  >
                    <thead>
                      {descriptionTableBody[index][1] ? (
                        <tr key={index + 'thead'}>
                          <Th>{descriptionTableBody[index][1]['id']}</Th>
                          <Th>{descriptionTableBody[index][1]['type']}</Th>
                          <Th>{descriptionTableBody[index][1]['value']}</Th>
                        </tr>
                      ) : (
                        <tr key={index + 'thead'}>
                          <Td>{descriptionTableBody[index][0]['id']}</Td>
                          <Td>{descriptionTableBody[index][0]['type']}</Td>
                          <Td>{descriptionTableBody[index][0]['value']}</Td>
                        </tr>
                      )}
                    </thead>
                    <tbody>
                      {descriptionTableBody[index].map((table, tblindex) => {
                        if (tblindex === 1) {
                          return <></>;
                        } else
                          return (
                            <tr key={index + 'tr' + tblindex}>
                              <Td>{table['id']}</Td>
                              <Td>{table['type']}</Td>
                              <Td>{table['value']}</Td>
                            </tr>
                          );
                      })}
                    </tbody>
                  </table>
                  <br />
                </>
              );
            })}
        </Description>
      )}
      {type === 'api' && (
        <>
          <br />
          <span style={{ color: 'grey' }}>HEADERS</span>
          <Divider />
          <br />
          <div>
            {request.header.map((item, index) => (
              <Param key={'header' + index}>
                <ParamTitle>
                  <TreeArrow />
                  {item.key}
                </ParamTitle>
                <ParamBody>
                  <ParamDescriptionTitle> {item.text}</ParamDescriptionTitle>
                  <ParamDescription>
                    {item.key === 'Authorization' ? '{{auth}}' : item.value}
                  </ParamDescription>
                </ParamBody>
              </Param>
            ))}
          </div>
          <br />
          <span style={{ color: 'grey' }}>PARAMS</span>
          <Divider />
          <br />
          <div>
            {request.method === 'GET' &&
              request.url.query &&
              request.url.query.map((item, index) => (
                <Param key={index + 'pa' + item.value}>
                  <ParamTitle>
                    <TreeArrow />
                    {item.key}
                  </ParamTitle>
                  <ParamBody>
                    <ParamDescriptionTitle>{item.value}</ParamDescriptionTitle>
                    <ParamDescription>{item.description}</ParamDescription>
                  </ParamBody>
                </Param>
              ))}

            {request.method === 'POST' &&
              postBody &&
              postBody.map((item, index) => (
                <Param key={index + 'pa' + item.key}>
                  <ParamTitle>
                    {' '}
                    <TreeArrow />
                    {item.key}
                  </ParamTitle>
                  <ParamBody>
                    <ParamDescriptionTitle>
                      {typeof item.value}
                    </ParamDescriptionTitle>
                    <ParamDescription>
                      {descriptions[removeSpace(name)][item.key]}
                    </ParamDescription>
                  </ParamBody>
                </Param>
              ))}
          </div>
          <br />
          <p>Responses</p>
          {/* for 200 */}
          <SuccessResponse
            status={200}
            response={response}
            apiname={removeSpace(name)}
          />
          <SuccessResponse status={400} />
        </>
      )}
    </>
  );
};

export default APIContent;
