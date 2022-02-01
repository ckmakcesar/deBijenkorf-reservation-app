import { mapByKey } from '../../utils/utils';

export const mockStores = [
  { id: 1, name: 'Centraal', address: 'Mid Amsterdam' },
  { id: 2, name: 'Zeeburg', address: 'Nord Oost Amsterdam' },
  { id: 3, name: 'Diemen', address: 'Oost Amsterdam' },
  { id: 4, name: 'Amstelveen', address: 'Zuid Amsterdam' },
  { id: 5, name: 'Sloten', address: 'West Amsterdam' }
];

export const mockStoresMap = mapByKey(mockStores, 'id');
