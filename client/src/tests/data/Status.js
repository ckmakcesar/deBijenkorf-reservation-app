import { mapByKey } from '../../utils/utils';

export const mockStatuses = [
  { id: 1, code: 'READY', name: 'Ready' },
  { id: 2, code: 'IN_PROGRESS', name: 'In Progress' },
  { id: 3, code: 'TODO', name: 'Todo' }
];

export const mockStatusesMap = mapByKey(mockStatuses, 'id');
