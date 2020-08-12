import React from 'react';
import ReactDOM from 'react-dom';
import CatSingle from './cat-single';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure, render } from 'enzyme';
configure({ adapter: new Adapter() });


it('component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CatSingle />, div);
});

test("single cat snapshot test", (() => {
  const component = renderer.create(
    <CatSingle/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
}))

it('loads required cat data (image)', () => {
  const wrapper = mount(<CatSingle/>);
  //has figure
  expect(wrapper.find('figure').length).toEqual(1);
  //background image loaded
  expect(wrapper.find('figure').get(0).props.style.backgroundImage.length > 0);
});
