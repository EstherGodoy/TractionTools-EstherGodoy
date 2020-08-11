import React from 'react';
import ReactDOM from 'react-dom';
import CatFamily from './cat-listings';

it('component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CatFamily />, div);
});
