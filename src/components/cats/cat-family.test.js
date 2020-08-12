import React from 'react';
import ReactDOM from 'react-dom';
import CatFamily from './cat-listings';
import renderer from 'react-test-renderer';

it('component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CatFamily />, div);
});

//snapshot test
test("cat family snapshot test", (() => {
  const component = renderer.create(
    <CatFamily/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
}))
