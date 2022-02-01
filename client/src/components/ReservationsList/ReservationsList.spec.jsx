import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import ReservationsList from './ReservationsList';
import { mockReservationsMap } from '../../tests/data/Reservation';
import { mockStoresMap } from '../../tests/data/Store';
import { mockStatusesMap } from '../../tests/data/Status';

describe('component:ReservationsList', () => {
  it('Should render ReservationsList with every optional props present', () => {
    const wrapper = shallow(
      <ReservationsList
        reservationsMap={mockReservationsMap}
        loading={false}
        storesMap={mockStoresMap}
        statusesMap={mockStatusesMap}
        setReservationToDelete={jest.fn()}
        setDrawerReservationId={jest.fn()}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
