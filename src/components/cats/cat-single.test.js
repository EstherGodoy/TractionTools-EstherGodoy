import React from 'react';
import ReactDOM from 'react-dom';
import CatSingle from './cat-single';

it('component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CatSingle />, div);
});
