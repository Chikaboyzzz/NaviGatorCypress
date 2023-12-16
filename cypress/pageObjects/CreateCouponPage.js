import { faker } from '@faker-js/faker';


export class CreateCouponPage{
    genderField(){return cy.get ('mat-radio-group > mat-radio-button:nth-child(2)');}
    genderField2(){return cy.get ('mat-radio-group > mat-radio-button:nth-child(1)');}
    clientNameField(){return cy.get ('input[formcontrolname="ClientFullName"]');}
    benefitButton(){return cy.get ('input[formcontrolname="Benefit"]').click();}
    beginDateField(){return cy.get ('input[formcontrolname="BeginDate"]');}
    endDateField(){return cy.get ('input[formcontrolname="EndDate"]');}

    doCreate(clientName=faker.person.fullName(),benefit="3000", beginDate="12/14/2023", endDate="12/20/2023",){
        this.clientNameField().type(clientName);
        cy.wait(1000)
        this.benefitButton().type(benefit);
        cy.wait(1000)
        this.beginDateField().type(beginDate)
        cy.wait(1000);
        this.endDateField().type(endDate);
        cy.wait(1000)
        cy.get('button.coupons-save__button[name="save"]').click();
        cy.wait(1000)

    }
}


