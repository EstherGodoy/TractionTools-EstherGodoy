import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import renderer from 'react-test-renderer';

//render test
it('application renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

//snapshot test
test("app snapshot test", (() => {
  const component = renderer.create(
    <App/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
}))
