import httpClient from "./http";

const RESERVATIONS_PATH = '/reservations';

const getAll = () => httpClient.get(RESERVATIONS_PATH);

export default {
  getAll,
};
