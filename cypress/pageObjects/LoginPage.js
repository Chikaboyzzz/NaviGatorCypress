export class LoginPage{
    usernameField(){return cy.get ('input[name="userName"]');}
    passwordField(){return cy.get ('input[name="password"]');}
    loginButton(){return cy.get ('input[name="submit"]');}

    doLogin(userName='Admin', password="Admin@Navi"){
        cy.visit('http://167.114.201.175:5000/');
        this.usernameField().type(userName);
        this.passwordField().type(password);
        cy.get('form').submit()
    }
}


