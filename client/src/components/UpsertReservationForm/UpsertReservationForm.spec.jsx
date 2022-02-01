import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import UpsertReservationForm from './UpsertReservationForm';
import { mockReservations } from '../../tests/data/Reservation';
import { mockStoresMap } from '../../tests/data/Store';
import { mockStatusesMap } from '../../tests/data/Status';

describe('component:UpsertReservationForm', () => {
  it('Should render UpsertReservationForm in the CREATE RESERVATION mode', () => {
    const wrapper = shallow(
      <UpsertReservationForm
        storesMap={mockStoresMap}
        statusesMap={mockStatusesMap}
        formId='form-101'
        onSubmit={jest.fn()}
        onClose={jest.fn()}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('Should render UpsertReservationForm in the UPDATE RESERVATION mode', () => {
    const wrapper = shallow(
      <UpsertReservationForm
        storesMap={mockStoresMap}
        statusesMap={mockStatusesMap}
        formId='form-202'
        onSubmit={jest.fn()}
        onClose={jest.fn()}
        reservation={mockReservations[0]}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
