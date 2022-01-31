import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import ReservationDetails from './ReservationDetails';
import { mockReservations } from '../../tests/data/Reservation';
import { mockStores } from '../../tests/data/Store';
import { mockStatuses } from '../../tests/data/Status';

describe('component:ReservationDetails', () => {
  it('Should render ReservationDetails with every optional props present', () => {
    const wrapper = shallow(
      <ReservationDetails
        reservation={mockReservations[0]}
        store={mockStores[0]}
        status={mockStatuses[0]}
        setReservationToDelete={jest.fn()}
        setDrawerReservationId={jest.fn()}
      />,
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
