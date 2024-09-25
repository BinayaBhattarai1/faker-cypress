export class Registration {
  getFirstName() {
    return cy.get("#firstName");
  }
  getLastName() {
    return cy.get("#lastName");
  }
  getEmail() {
    return cy.get("#userEmail");
  }
  getGender() {
    return cy.get("label[for='gender-radio-1']");
  }
  getMobile() {
    return cy.get("#userNumber");
  }
  getDateOfBirth() {
    return cy.get("#dateOfBirthInput");
  }
  getDatePicker() {
    return cy.get("div[aria-label='Choose Sunday, September 22nd, 2024']");
  }
  getSubjects() {
    return cy.get(
      ".subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3"
    );
  }
  getHobbies() {
    return cy.get("label[for='hobbies-checkbox-1']");
  }
  getPicture() {
    return cy.get("#uploadPicture");
  }
  getCurrentAddress() {
    return cy.get("#currentAddress");
  }
  getState() {
    return cy.get("div[class=' css-yk16xz-control'] div[class=' css-1wa3eu0-placeholder']");
  }
  getaState(){
    return cy.get(".css-11unzgr").contains("NCR");
  }
  getCity() {
    return cy.get("div[class=' css-1wa3eu0-placeholder']");
  }
  getaCity(){
    return cy.get("#react-select-4-option-0");
  }
  getSubmit() {
    return cy.get("#submit");
  }
  
  userRegister(data) {
    this.getFirstName().type(data.firstName);
    this.getLastName().type(data.lastName);
    this.getEmail().type(data.email);
    this.getGender().click();
    this.getMobile().type(data.mobile);
    this.getDateOfBirth().click();
    this.getDatePicker().click();
    this.getSubjects().type("Maths").click();
    this.getHobbies().click();
    this.getPicture().attachFile("image.png");
    this.getCurrentAddress().type(data.currentAddress);
    this.getState().click();
    this.getaState().should('be.visible').click();
    this.getCity().click();
    this.getaCity().should('be.visible').click();
    this.getSubmit().click();
}
}