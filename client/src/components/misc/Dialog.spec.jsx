import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Dialog from './Dialog';

describe('component:Dialog', () => {
  it('Should render Dialog with every optional props absent', () => {
    const wrapper = shallow(
      <Dialog
        isOpen={true}
        headerTitle='Top of Page'
        onClose={jest.fn()}
        onConfirm={jest.fn()}
      >
        {/* lint recommends NOT to nest children as prop */}
        <h5>hello world</h5>
      </Dialog>
      ,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Should render Dialog with every optional props present', () => {
    const wrapper = shallow(
      <Dialog
        isOpen={true}
        headerTitle='Top of Page'
        confirmButtonText='Vamos Amigo'
        confirmButtonTone='green'
        onClose={jest.fn()}
        onConfirm={jest.fn()}
      >
        <h5>hello world</h5>
      </Dialog>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
