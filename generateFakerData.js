// Import the faker library
const { Faker, ja, en } = require('@faker-js/faker');
const fs = require('fs');

// Initialize Faker with Japanese locale
const faker = new Faker({
  locale: [ja, en] // Japanese locale with English fallback
});

// Function to generate fake test data
function generateTestData() {
  const testData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    mobile: '98' + faker.number.int({ min: 10000000, max: 99999999 }).toString(),
    currentAddress: faker.location.streetAddress(),
  };

  // Write the data to testData.json file
  fs.writeFileSync('cypress/fixtures/testData.json', JSON.stringify(testData, null, 2));
}

// Call the function to generate test data
generateTestData();
