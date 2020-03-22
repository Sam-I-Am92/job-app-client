import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../client/src/components/App';

test('Fake test', () => {
  expect(true).toBeTruthy();
});

describe('test <App />', () => {
  // render the App in document
  
  it('should have a paragraph element with a class name', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('p')).toBeTruthy();
    expect(wrapper.find('.time')).toBeTruthy();
  });
});