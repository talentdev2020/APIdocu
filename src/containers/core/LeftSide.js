import React from 'react';
import LeftSide from '../../components/core/LeftSide';
import { useSelector } from 'react-redux';
const LeftSideContainer = () => {
  const { error, collection } = useSelector((state) => state.collection);
  return (
    <>{error === '' ? <LeftSide data={collection} /> : <div>{error}</div>}</>
  );
};

export default LeftSideContainer;
