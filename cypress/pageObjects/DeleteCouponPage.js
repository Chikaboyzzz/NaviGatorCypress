import { faker } from '@faker-js/faker';


export class DeleteCouponPage{
    DelButtonField(){return cy.get ('button.mat-button:first');}
    TextWithDel(){return cy.get ('.mat-menu-item:contains("Удалить")');}
    TextWithOk(){return cy.get ("button.mat-button:contains('OK')");}

    doDelete(){
        this.DelButtonField().click();
        cy.wait(2000)
        this.TextWithDel().click();
        cy.wait(2000)
        this.TextWithOk().click();
        cy.wait(2000)
    }
}




