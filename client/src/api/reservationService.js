import httpClient from "./http";

const RESERVATIONS_PATH = '/reservations';

const getAll = () => httpClient.get(RESERVATIONS_PATH);

const create = (reservation) => httpClient.post(RESERVATIONS_PATH,
  reservation
);

const update = (reservation) => httpClient.put(`${RESERVATIONS_PATH}/${reservation.id}`,
  reservation
);

const del = (reservationId) => httpClient.delete(`${RESERVATIONS_PATH}/${reservationId}`);

const getStores = () => httpClient.get(`${RESERVATIONS_PATH}/stores`);

const getStatuses = () => httpClient.get(`${RESERVATIONS_PATH}/statuses`);

export default {
  getAll,
  create,
  update,
  del,
  getStores,
  getStatuses,
};
