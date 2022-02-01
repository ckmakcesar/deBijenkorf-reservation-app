import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import RadioButtons from './RadioButtons';

describe('component:RadioButtons', () => {
  const mockGreetingChoices = ['Hola', 'Hello', 'Bonjour'];

  it('Should render RadioButtons with every optional props absent', () => {
    const wrapper = shallow(
      <RadioButtons
        values={mockGreetingChoices}
        onChange={jest.fn()}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Should render RadioButtons with every optional props present', () => {
    const wrapper = shallow(
      <RadioButtons
        label='Group of Radio Buttons'
        values={mockGreetingChoices}
        onChange={jest.fn()}
        name='greetings-choices'
        value={mockGreetingChoices[1]}
        required={true}
        disabled={false}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
