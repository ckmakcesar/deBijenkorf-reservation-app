describe('Interact With ReservationsPage', () => {
  beforeEach(() => {
    cy.visit('localhost:8080/')
  });

  it('should load blank state correctly', () => {
    cy.get('#Header-reservations-page').contains('Reservations').should('be.visible');
    cy.get('#Reservations-list').contains('There are no reservations').should('be.visible');
  });

  it(`should create a new reservation`, () => {
    const newReservation = {
      name: 'Meeting with CEO',
      store: 'Centraal',
      status: 'TODO',
      date: '2022-02-28',
    };

    // Click "Create Reservation" to open drawer
    cy.get('#Button-create-reservation').click();
    cy.get('#Header-create-reservation-drawer').should('be.visible');

    // Input values of the new reservation
    cy.get('#Input-name').type(newReservation.name);
    cy.get('#Select-store').select(newReservation.store);
    cy.get('#Radio-button-status-Todo').check();
    cy.get('#DatePickerDiv-date').find('input').first().type(newReservation.date);

    // Submit form
    cy.get('#Button-create-reservation-drawer-confirm').click();

    // On successful creation
    cy.get('#Toast-container').contains('created');
    cy.get('#Reservations-list').contains(newReservation.name);
  });

  it(`should delete the first (and only) reservation`, () => {
    // Click "Delete" to open dialog
    cy.get('[id^=Reservation-details-]').find('[type="button"]').first().click();
    cy.get('#Header-delete-reservation-dialog').should('be.visible');

    cy.get('#Button-delete-reservation-dialog-confirm').click();

    // On successful creation
    cy.get('#Toast-container').contains('deleted');
    cy.get('#Reservations-list').contains('There are no reservations').should('be.visible');
  });
});
