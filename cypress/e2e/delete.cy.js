import { faker } from '@faker-js/faker';
import { LoginPage } from "../pageObjects/LoginPage";
import { CreateCouponPage } from "../pageObjects/CreateCouponPage";



describe('Login suite', () => {
  const loginPage = new LoginPage();
  const randomName = faker.person.fullName();
  it('should do login', () => {
    loginPage.doLogin();
    cy.wait(1000)
    cy.visit('http://167.114.201.175:5000/coupons');
    cy.wait(1000)
  })
})