import React from 'react';
import ReactDOM from 'react-dom';
import PageHome from './page-home';

it('component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageHome store={test} />, div);
});
