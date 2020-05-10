import React from 'react';
import TreeMenu from 'react-simple-tree-menu';
import 'react-simple-tree-menu/dist/main.css';

const treeData = {
  'first-level-node-1': {
    // key
    label: 'Node 1 at the first level',
    index: 0, // decide the rendering order on the same level
    nodes: {
      'second-level-node-1': {
        label: 'Node 1 at the second level',
        index: 0,
        nodes: {
          'third-level-node-1': {
            label: 'Node 1 at the third level',
            index: 0,
            nodes: {}, // you can remove the nodes property or leave it as an empty array
          },
        },
      },
    },
  },
  'first-level-node-2': {
    label: 'Node 2 at the first level',
    index: 1,
  },
};

const Left = () => {
  return <TreeMenu data={treeData} debounceTime={125}></TreeMenu>;
};

export default Left;
