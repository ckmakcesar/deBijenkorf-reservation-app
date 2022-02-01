import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import InputField from './InputField';

describe('component:InputField', () => {
  it('Should render InputField with every optional props absent', () => {
    const wrapper = shallow(
      <InputField
        onChange={jest.fn()}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Should render InputField with every optional props present', () => {
    const wrapper = shallow(
      <InputField
        label='Number Input'
        name='number-input'
        value={(555).toString()}
        type='number'
        min={100}
        max={9999}
        onChange={jest.fn()}
        required={true}
        disabled={false}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
