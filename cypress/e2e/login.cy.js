import {login} from "../support/commands.js";

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe("Given I am want to login to my account", function () {
    this.beforeEach(function () {
        cy.visit('/')

    });
    it("INVALIDLOGIN - I Should be able to test this account", function () {
      cy.get(login.emailField).type(login.emailTxt)
      cy.get(login.passwordField).type(login.passwordTxt)
      cy.get(login.loginBtn).click()
      
    })
    it("LOGIN - I Should be able to test this account", function () {
      cy.get(login.emailField).type(login.emailTxt)
      cy.get(login.passwordField).type(login.passwordTxt)
      cy.get(login.loginBtn).click()
      
    })
    
})