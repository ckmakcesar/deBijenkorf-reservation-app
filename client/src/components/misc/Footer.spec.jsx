import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Footer from './Footer';

describe('component:Footer', () => {
  it('Should render Footer with every optional props absent', () => {
    const wrapper = shallow(
      <Footer>
        {/* lint recommends NOT to nest children as prop */}
        <h5>hello world</h5>
      </Footer>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Should render Footer with every optional props present', () => {
    const wrapper = shallow(
      <Footer reducedPadding={true}>
        <h5>hello world</h5>
      </Footer>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
