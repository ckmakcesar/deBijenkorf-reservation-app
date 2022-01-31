import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Select from './Select';

describe('component:Select', () => {
  const mockLanguageOptions = [
    { name: 'EN' },
    { name: 'ES' },
    { name: 'NL' },
  ];

  it('Should render Select with every optional props absent', () => {
    const wrapper = shallow(
      <Select
        options={mockLanguageOptions}
        onChange={jest.fn()}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Should render Select with every optional props present', () => {
    const wrapper = shallow(
      <Select
        label='Select a Language'
        options={mockLanguageOptions}
        onChange={jest.fn()}
        name='language-options'
        value={mockLanguageOptions[0].name}
        required={true}
        disabled={false}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
