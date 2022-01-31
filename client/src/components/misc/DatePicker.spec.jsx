import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import DatePicker from './DatePicker';

describe('component:DatePicker', () => {
  it('Should render DatePicker with every optional props absent', () => {
    const wrapper = shallow(
      <DatePicker
        label='Choose a date below'
        onChange={jest.fn()}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Should render DatePicker with every optional props present', () => {
    const wrapper = shallow(
      <DatePicker
        label='Choose a date below'
        required={true}
        dateFormat='yyyy/MM/dd'
        selected={null}
        onChange={jest.fn()}
        filterDate={(t) => (new Date(t) > new Date())}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
