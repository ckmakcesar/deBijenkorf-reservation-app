import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Drawer from './Drawer';

describe('component:Drawer', () => {
  it('Should render Drawer with every optional props absent', () => {
    const wrapper = shallow(
      <Drawer
        isOpen={true}
        headerTitle='Top of Page'
        onClose={jest.fn()}
        onConfirm={jest.fn()}
      >
        {/* lint recommends NOT to nest children as prop */}
        <h5>hello world</h5>
      </Drawer>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Should render Drawer with every optional props present', () => {
    const wrapper = shallow(
      <Drawer
        isOpen={true}
        headerTitle='Top of Page'
        formId='form-002'
        confirmButtonText='Vamos Amigo'
        confirmButtonTone='green'
        onClose={jest.fn()}
        onConfirm={jest.fn()}
      >
        <h5>hello world</h5>
      </Drawer>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
