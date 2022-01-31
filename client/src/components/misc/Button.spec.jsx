import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Button from './Button';

describe('component:Button', () => {
  it('Should render Button with every optional props absent', () => {
    const wrapper = shallow(
      <Button />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Should render Button with every optional props present', () => {
    const wrapper = shallow(
      <Button
        onClick={jest.fn()}
        text='Click to Submit'
        disabled={false}
        isSubmit={true}
        formId='form001'
        boxIconClassName='bx-send'
        tone='secondary'
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
