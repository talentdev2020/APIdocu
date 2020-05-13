import React, { useState, useEffect, useRef } from 'react';
// import ScrollableAnchor from 'react-scrollable-anchor';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import APIResponse from './APIResponse';
import APIContent from './APIContent';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useDispatch } from 'react-redux';
import { selectmenu } from '../../modules/collection';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
function removeSpace(string) {
  return string.replace(/\s/g, '').toLowerCase();
}
const EDivider = styled(Divider)`
  margin: 2rem 0 !important;
`;
const Wrapper = styled.div`
  padding-left: 3rem;
  width: calc(100vw - 320px);
  & div {
    color: #383838;
    text-align: left;
    font-size: 1rem;
    line-height: 1.7rem;
  }
`;
const Section = styled.div`
  margin: 2rem 0;
  @media (max-width: 1280px) {
    margin-top: 4rem;
  }
    
  }
`;

const Content = ({ data }) => {
  const classes = useStyles();
  const [content, setContent] = useState('');
  const elementRef = useRef();
  const dispatch = useDispatch();
  // Element scroll position
  useScrollPosition(({ currPos }) => {
    const scroll = currPos.y || window.pageYOffset;

    const viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight,
    };
    const elements = document.getElementById('parent').children;

    for (let i = 0; i < parseInt(elements.length); i++) {
      const element = elements[i];
      const boundsTop = element.getBoundingClientRect().top + scroll - 200;
      // console.log('client', element.getBoundingClientRect().top);
      // console.log('scroll', scroll);
      const bounds = {
        top: boundsTop,
        bottom: boundsTop + element.clientHeight + 200,
      };

      // console.log(bounds);
      // console.log(viewport);
      if (bounds.top >= viewport.top) {
        console.log('id', element.id);
        if (element.id) {
          dispatch(selectmenu(element.id));
          return;
        }
      }
    }
  }, []);
  useEffect(() => {
    let temp = [];
    data.map((firstchild) => {
      temp.push({
        name: firstchild.name,
        type: 'parent',
        description: firstchild.description,
      });
      if (firstchild.item) {
        firstchild.item = firstchild.item.map((seconddata) => {
          temp.push({
            name: seconddata.name,
            type: 'subparent',
            description: seconddata.description,
          });

          if (seconddata.item) {
            seconddata.item = seconddata.item.map((thirddata) => {
              temp.push({
                name: thirddata.name,
                type: 'api',
                response: thirddata.response[0],
                request: thirddata.request,
              });
              return thirddata;
            });
          }
          return seconddata;
        });
      }
      return firstchild;
    });
    setContent(temp);
  }, [data]);

  return (
    <Wrapper className={classes.root} ref={elementRef} id="parent">
      {/* <ScrollableAnchor> */}
      <Section id={'introduction'}>
        {' '}
        <Grid container spacing={3}>
          <Grid item md={12} lg={6}>
            <strong>Introduction</strong>
            <br />
            Welcome to Venus. <br />
            The purpose of this documentation is to ensure that every user is
            able to properly integrate a full card issuing solution to their
            system through our series of simple easy-to-use sets of APIs. Here
            you will find an explanation of how our products work and how to
            integrate with them.
            <div>
              <strong> Authorization</strong> <br />
              On every API call, the header named APIKEY must be sent to
              authenticate every request. Talk to your account manager to get
              access to your key.{' '}
              <p>
                <strong>Query parameters for listings</strong>
              </p>{' '}
              Every API in our system that provides a list of records has
              available a set of filters and parameters to make the listings
              represent the records they are actually looking for. <br />
              For any GET call for listing records, the following query
              parameters will be available: <br />
              with[] <br />
              This parameter will let the user who is requesting it add any
              desired relation the resource has in the API so it lists nested on
              the JSON structure. It can be sent as many as the resource has
              available, it is also possible to access subsequent relations by
              separating the names by "." (dot). <br />
              An example of a request would be
              /api/v2/entities?with[]=documents&with[]=funds&with[]=cards, this
              request would query for all entities and add to the structure
              thier documents, funds, and cards relations.
              <br /> and[]
              <br /> This query parameter will enable the user to filter the
              records by applying a "AND" conditional, meaning that the search
              needs to satisfy all values so it loads on the response, it is
              possible to use multiple values for the same attribute and use as
              many and as needed. An example would be and[type][][eq]=receive.{' '}
              <br />
              or[] <br />
              This query parameter will enable the user to filter the records by
              applying a "OR" conditional, meaning that the search needs to
              satisfy at least one or more values so it loads on the response,
              it is possible to use multiple values for the same attribute and
              use as many ors as needed. An example would be
              or[tierLevel][][eq]=1. <br />
              in[] This query parameter will enable the user to filter the
              records by applying a "IN" conditional, meaning that the attribute
              needs to satisfy at least one or more values within the array so
              it loads on the response, it is possible to use multiple values
              for the same attribute and use as many ors as needed.
              <br /> An example would be
              in[tierLevel][]=1&in[tierLevel][]=2&in[tierLevel][]=3. date[] This
              query parameter will enable the user to filter the records by
              applying a "DATE" conditional, meaning that the search needs to
              satisfy a certain date conditional so it loads on the response, it
              is possible to use multiple values for same attribute and use as
              many ors as needed. An example would be
              date[created_at][][gt]=2018-01-01&date[created_at][][lt]=2018-01-31.
              It is possible to use various type of operators, below is the
              mapping for each one: eq => Equal nq => Not Equal gt => Greater
              than lt => Less than gte => Greater than or equal to lte => Less
              than or equal to like => Like conditinal
            </div>
          </Grid>
          <Grid item md={12} lg={6}>
            <APIResponse isVisible={true} />
          </Grid>
        </Grid>
      </Section>
      {/* </ScrollableAnchor> */}
      <EDivider />
      {/* <ScrollableAnchor> */}
      {content &&
        content.map((item, index) => (
          <Section
            id={`${removeSpace(item.name)}`}
            key={index + 'sec' + item.name}
          >
            <Grid container spacing={3}>
              <Grid item sm={12} sx={12} md={12} lg={6}>
                <APIContent data={item} />
              </Grid>
              <Grid item sx={12} sm={12} md={12} lg={6}>
                <APIResponse
                  isVisible={item.type.includes('parent')}
                  response={item.response ? item.response.body : ''}
                  request={
                    item.request && item.request.reponse
                      ? item.request.response[0].body
                      : ''
                  }
                />
              </Grid>
            </Grid>
            {item.type === 'api' && <Divider />}
          </Section>
        ))}

      {/* </ScrollableAnchor> */}
    </Wrapper>
  );
};
export default Content;
