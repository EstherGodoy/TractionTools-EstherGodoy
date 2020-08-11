import React from 'react';
import ReactDOM from 'react-dom';
import CatListings from './cat-listings';

//renders
it('component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CatListings />, div);
});
