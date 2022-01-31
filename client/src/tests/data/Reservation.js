import { mapByKey } from '../../utils/utils';

export const mockReservations = [
  {
    id: 1,
    name: 'Repair',
    storeId: 1,
    statusId: 3,
    date: '2022-01-26T23:00:00.000Z',
    createdAt: '2022-02-10T23:00:00.000Z'
  },
  {
    id: 2,
    name: 'Consultation',
    storeId: 1,
    statusId: 3,
    date: '2022-01-26T23:00:00.000Z',
    createdAt: '2022-02-20T23:00:00.000Z'
  },
  {
    id: 3,
    name: 'Gift Drop',
    storeId: 1,
    statusId: 2,
    date: '2022-01-26T23:00:00.000Z',
    createdAt: '2022-02-28T23:00:00.000Z'
  }
];

export const mockReservationsMap = mapByKey(mockReservations, 'id');
