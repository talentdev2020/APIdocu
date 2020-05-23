import React, { useEffect } from 'react';
import LeftSide from '../../components/core/LeftSide';
import Content from '../../components/core/Content';
import { useSelector, useDispatch } from 'react-redux';
import { getdata } from '../../modules/collection';
import { withRouter } from 'react-router';

const LeftSideContainer = ({ location }) => {
  const dispatch = useDispatch();
  const hash = location.hash.substr(1, location.hash.length - 1);

  const { isLoading, isError, collection, selectedmenu } = useSelector(
    (state) => state.collection,
  );
  useEffect(() => {
    if (!collection) {
      if (!isError && !!isLoading) dispatch(getdata());
    }
  }, [collection, isError, isLoading, dispatch]);
  return (
    <>
      {isError ? (
        <div>API connection error</div>
      ) : (
        <>
          {isLoading ? (
            <div style={{ textAlign: 'center', margin: 'auto' }}>
              <img src="/process.gif" width="70px" alt="process" />
            </div>
          ) : (
            <>
              <LeftSide
                data={collection.data.item}
                selectedmenu={selectedmenu}
                hash={hash}
              />
              <Content data={collection.data.item} />{' '}
            </>
          )}
        </>
      )}
    </>
  );
};

export default withRouter(LeftSideContainer);
