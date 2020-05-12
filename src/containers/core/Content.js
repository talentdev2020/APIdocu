import React from 'react';
import Content from '../../components/core/Content';
import { useSelector } from 'react-redux';
const ContentContainer = () => {
  const { error, collection } = useSelector((state) => state.collection);
  return (
    <>{error === '' ? <Content data={collection} /> : <div>{error}</div>}</>
  );
};

export default ContentContainer;
