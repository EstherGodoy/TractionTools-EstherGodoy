import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

import { shallow, mount, configure, render } from 'enzyme';
import CatListings from './cat-listings';

configure({ adapter: new Adapter() });

//renders
it('component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CatListings />, div);
});

//loads data
it('loads cats on inital render', () => {
  const wrapper = shallow(<CatListings/>);
  await flushPromises();
  wrapper.update();
  setTimeout(function(){
    expect(wrapper.find('.cats li').length).toEqual(8);
  }, 1000);
});

//next button returns results
it('clicking next button returns results', () => {
  const wrapper = shallow(<CatListings/>);
  expect(wrapper.find('.next')).toHaveLength(1);
  wrapper.find('.next').simulate('click');
  setTimeout(function(){
    expect(wrapper.find('.cats li').length).toEqual(8);
  }, 1000)
});

//previous button returns results
it('clicking previous button returns results', () => {
  const wrapper = shallow(<CatListings/>);
  expect(wrapper.find('.prev')).toHaveLength(1);
  wrapper.find('.prev').simulate('click');
  setTimeout(function(){
    expect(wrapper.find('.cats li').length).toEqual(8);
  }, 1000)
});
