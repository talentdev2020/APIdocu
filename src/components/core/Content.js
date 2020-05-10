import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import APIResponse from './APIResponse';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const EDivider = styled(Divider)`
  margin: 2rem 0 !important;
`;
const Wrapper = styled.div`
  padding-left: 3rem;
  width: 100%;
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
const ParamDescription = styled.span`
  color: #969595;
`;
const ParamTitle = styled.div`
  font-weight: bold;
  display: inline-block;
  width: 10rem;
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
const Content = () => {
  const classes = useStyles();

  return (
    <Wrapper className={classes.root}>
      <ScrollableAnchor>
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
                desired relation the resource has in the API so it lists nested
                on the JSON structure. It can be sent as many as the resource
                has available, it is also possible to access subsequent
                relations by separating the names by "." (dot). <br />
                An example of a request would be
                /api/v2/entities?with[]=documents&with[]=funds&with[]=cards,
                this request would query for all entities and add to the
                structure thier documents, funds, and cards relations.
                <br /> and[]
                <br /> This query parameter will enable the user to filter the
                records by applying a "AND" conditional, meaning that the search
                needs to satisfy all values so it loads on the response, it is
                possible to use multiple values for the same attribute and use
                as many and as needed. An example would be
                and[type][][eq]=receive. <br />
                or[] <br />
                This query parameter will enable the user to filter the records
                by applying a "OR" conditional, meaning that the search needs to
                satisfy at least one or more values so it loads on the response,
                it is possible to use multiple values for the same attribute and
                use as many ors as needed. An example would be
                or[tierLevel][][eq]=1. <br />
                in[] This query parameter will enable the user to filter the
                records by applying a "IN" conditional, meaning that the
                attribute needs to satisfy at least one or more values within
                the array so it loads on the response, it is possible to use
                multiple values for the same attribute and use as many ors as
                needed.
                <br /> An example would be
                in[tierLevel][]=1&in[tierLevel][]=2&in[tierLevel][]=3. date[]
                This query parameter will enable the user to filter the records
                by applying a "DATE" conditional, meaning that the search needs
                to satisfy a certain date conditional so it loads on the
                response, it is possible to use multiple values for same
                attribute and use as many ors as needed. An example would be
                date[created_at][][gt]=2018-01-01&date[created_at][][lt]=2018-01-31.
                It is possible to use various type of operators, below is the
                mapping for each one: eq => Equal nq => Not Equal gt => Greater
                than lt => Less than gte => Greater than or equal to lte => Less
                than or equal to like => Like conditinal
              </div>
            </Grid>
            <Grid item md={12} lg={6}>
              <APIResponse />
            </Grid>
          </Grid>
        </Section>
      </ScrollableAnchor>
      <EDivider />
      <ScrollableAnchor>
        <Section id={'orderlist'}>
          <Grid container spacing={3}>
            <Grid item md={12} lg={6}>
              <strong style={{ color: '#6bbd5b' }}>Get </strong>Card Order List
              <br />
              <ApiBody>
                {'{{ url }}'}
                /api/v2/cardOrders?and[status][][eq]=verified&limit=2
              </ApiBody>
              <p>GET a list of card orders</p>
              <p>HEADERS</p>
              <EDivider />
              <div>
                <ParamTitle>Authorization</ParamTitle> {'{{authorization}}'}
              </div>
              <p>PARAMS</p>
              <EDivider />
              <div>
                <ParamTitle>and[status][][eq]</ParamTitle> verified
                <br />
                <ParamTitle> &nbsp;</ParamTitle>{' '}
                <ParamDescription>
                  Optional parameter to filter by status
                </ParamDescription>
              </div>
              <div>
                <ParamTitle>limit</ParamTitle> 2
                <br />
                <ParamTitle> &nbsp;</ParamTitle>{' '}
                <ParamDescription>
                  Optional parameter to limit the results by 2
                </ParamDescription>
              </div>
            </Grid>
            <Grid item md={12} lg={6}>
              <APIResponse
                body={`{
                "success": true,
                "data": [
                  {
                        "id": 5,
                        "entity_id": 314,
                    "card_id": 3,
                    "card_upgrade_id": null,
                    "reference": null,
                    "type": "issue",
                    "status": "verified",
                    "created_at": "2018-12-25 14:06:51",
                    "updated_at": "2019-12-12 06:04:15"
                  },
                  {
                    "id": 8,
                    "entity_id": 4013,
                    "card_id": 2,
                    "card_upgrade_id": null,
                    "amount": null,
                    "reference": null,
                    "type": "issue",
                    "status": "verified",
                    "created_at": "2019-01-23 01:47:31",
                    "updated_at": "2019-01-23 01:53:37"
                  }
                ],
                "links": {
                  "first": "https://usnvspd1.cardapi.com/api/v2/cardOrders?page=1",
                  "last": "https://usnvspd1.cardapi.com/api/v2/cardOrders?page=972",
                  "prev": null,
                  "next": "https://usnvspd1.cardapi.com/api/v2/cardOrders?page=2"
                },
                "meta": {
                  "current_page": 1,
                  "from": 1,
                  "last_page": 972,
                  "path": "https://usnvspd1.cardapi.com/api/v2/cardOrders",
                  "per_page": "2",
                  "to": 2,
                  "total": 1944
                }
              }`}
              />
            </Grid>
          </Grid>
        </Section>
      </ScrollableAnchor>
    </Wrapper>
  );
};
export default Content;
