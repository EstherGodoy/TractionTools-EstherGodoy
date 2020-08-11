import React from 'react';
import ReactDOM from 'react-dom';
import CatSingle from './cat-single';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure, render } from 'enzyme';
configure({ adapter: new Adapter() });

it('component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CatSingle />, div);
});

it('loads required cat data', () => {
  const wrapper = mount(<CatSingle/>);
  //has figure
  expect(wrapper.find('figure').length).toEqual(1);
  //background image loaded
  expect(wrapper.find('figure').get(0).props.style.backgroundImage.length > 0);
});
