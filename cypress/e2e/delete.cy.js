import { faker } from '@faker-js/faker';



describe('Login suite', () => {
  const randomName = faker.person.fullName();
  it('should do login', () => {
    cy.wait(1000)
    cy.visit('http://167.114.201.175:5000');
    cy.wait(1000)
    cy.get('form input[name="userName"]').type("Admin");
    cy.get('form input[name="password"]').type("Admin@Navi");
    cy.wait(1000)
    cy.get('form').submit() // Submit a form
    cy.wait(1000)
    cy.get('a.crm-navigation__link[href="/coupons"]').click();
    cy.wait(1000)
    cy.get('button.crm-button').click();
    cy.wait(1000)
    cy.get('mat-radio-group > mat-radio-button:nth-child(2)').click();
    //mat-radio-group > mat-radio-button:nth-child(1)
    cy.wait(1000)
    cy.get('input[formcontrolname="ClientFullName"]').type(randomName);
    cy.wait(1000)

    cy.get('input[id="mat-input-3"]').type("12/13/2023");
    cy.get('input[id="mat-input-4"]').type("12/31/2023");
    cy.wait(1000)
    
    cy.get("mat-form-field input").get(`[formcontrolname="name"]`).type("test test"); // тут ошибка


    

  })
})