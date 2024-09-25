import { Registration } from "../support/registration";

describe('Registration', () => {
    it("Student Registration Form", () => {
      const register = new Registration();
      const url = "https://demoqa.com/automation-practice-form";
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.visit(url);
      cy.fixture("testData.json").then((data) => {
        register.userRegister(data);
      });
    });
  });
