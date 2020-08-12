import React from 'react';
import ReactDOM from 'react-dom';
import CatListings from './cat-listings';
import renderer from 'react-test-renderer';

//renders
it('component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CatListings />, div);
});

//snapshot test
test("cat listings snapshot test", (() => {
  const component = renderer.create(
    <CatListings/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
}))
