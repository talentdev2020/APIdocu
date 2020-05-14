import React, { useEffect } from 'react';
import LeftSide from '../../components/core/LeftSide';
import Content from '../../components/core/Content';
import { useSelector, useDispatch } from 'react-redux';
import { getdata } from '../../modules/collection';

const LeftSideContainer = () => {
  const dispatch = useDispatch();
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
            <div style={{ textAlign: 'center' }}>Loading...</div>
          ) : (
            <>
              <LeftSide
                data={collection.data.item}
                selectedmenu={selectedmenu}
              />
              <Content data={collection.data.item} />{' '}
            </>
          )}
        </>
      )}
    </>
  );
};

export default LeftSideContainer;
