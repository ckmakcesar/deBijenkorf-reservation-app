import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Header from './Header';

describe('component:Header', () => {
  it('Should render Header with every optional props absent', () => {
    const wrapper = shallow(
      <Header
        text='This is the very top of the page'
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Should render Header with every optional props present', () => {
    const wrapper = shallow(
      <Header
        text='This is the very top of the page'
        smaller={true}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
