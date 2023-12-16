import { LoginPage } from "../pageObjects/LoginPage";
import { CreateCouponPage } from "../pageObjects/CreateCouponPage";

describe('Login suite', () => {
  const loginPage = new LoginPage();
  const createCouponPage = new CreateCouponPage();
    
  it('should do login', () => {
    loginPage.doLogin();
    cy.wait(1000)
    cy.get('a.crm-navigation__link[href="/coupons"]').click();
    cy.wait(1000)
    cy.get('button.crm-button').click();
    createCouponPage.doCreate();
  
  });
});
