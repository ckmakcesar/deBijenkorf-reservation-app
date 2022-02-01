const request = require('supertest');
const app = require('../app');
const { sequelize } = require('../models');
const { mockReservation } = require('./data/Reservation');

describe('Test the root path', () => {
  afterAll(() => {
    sequelize.close();
  });

  it('Should respond 200 with the GET method for reservations', async () => {
    const response = await request(app)
      .get('/api/v1/reservations');
    expect(response.statusCode).toBe(200);
  });
  it('Should respond 200 with the GET method for stores', async () => {
    const response = await request(app)
      .get('/api/v1/reservations/stores');
    expect(response.statusCode).toBe(200);
  });
  it('Should respond 200 with the GET method for statuses', async () => {
    const response = await request(app)
      .get('/api/v1/reservations/statuses');
    expect(response.statusCode).toBe(200);
  });

  it('Should try to delete a reservation with id = 2022', async () => {
    const response = await request(app)
      .delete('/api/v1/reservations/2022');
    expect((/204|404/).test(response.statusCode)).toBe(true);
  });
  it('Should respond 404 when trying to delete a reservation with id = 2022 (which should be gone)', async () => {
    const response = await request(app)
      .delete('/api/v1/reservations/2022');
    expect(response.statusCode).toBe(404);
  });
  it('Should add a reservation with id = 2022', async () => {
    const response = await request(app)
      .post('/api/v1/reservations')
      .set('Content-Type', 'application/json')
      .send(mockReservation);
    expect(response.statusCode).toBe(201);
  });
  it('Should return the same reservation, upon creation', async () => {
    const response = await request(app)
      .get('/api/v1/reservations');
    const reservations = JSON.parse(response.text)
    const reservationId2022 = reservations.find((reservation)=>reservation.id===2022)
    expect(JSON.stringify(reservationId2022)).toBe(JSON.stringify(mockReservation)); // JSON.stringfy for deep compare
  });
  it('Should update the reservation with id = 2022', async () => {
    const response = await request(app)
      .put('/api/v1/reservations/2022')
      .set('Content-Type', 'application/json')
      .send({ name: 'Repair - Advance Level' });
    expect(response.statusCode).toBe(200);
  });
  it('Should respond 204 when trying to delete the reservation with id = 2022', async () => {
    const response = await request(app)
      .delete('/api/v1/reservations/2022');
    expect(response.statusCode).toBe(204);
  });

  // Note: NOT including the test for Delete ALL - or we can set up an alternative DB for testing purpose
});
