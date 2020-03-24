const fs = require('fs');
const faker = require('faker');
const path = require('path');

// store path of json file to write to in var
const dataPath = path.join(__dirname, '/data.json');

// declare empty data objects and arrays
let data = {};
let companies = [];
let offers = [];
let users = [];

// create 100 job openings objects & push each into companies array
const generateCompanyData = () => {

  for ( let i = 0; i < 100; i++ ) {
    // generate fake job postings
    let companyId = i;
    let companyName = faker.lorem.word();
    let jobTitle = faker.name.jobTitle();
    let jobLink = faker.internet.domainName();

    // create company and push into company array
    companies.push({
      'id': companyId,
      'company': companyName,
      'title': jobTitle,
      'link': jobLink
    });
  }

  return companies;

};

// create 100 financial offers & push each into offers array
const generateOfferData = () => {

  for ( var i = 0; i < 100; i++ ) {
    // generate random values
    let offerId = i;
    let oppType = 'Full-Time';
    let initialComp = `$${faker.random.number()}`;
    let negotiated = 'Yes';
    let finalComp = `$${faker.random.number()}`;
    let accepted = 'Yes';

    // create offers and push into offers array
    offers.push({
      'id': offerId,
      'oppType': oppType,
      'initialComp': initialComp,
      'negotiated': negotiated,
      'finalComp': finalComp,
      'accepted': accepted
    });
  }

  return offers;

};

// create 10 users & push each into users array
const generateUsersData = () => {

  for ( var i = 0; i < 100; i++ ) {
    // generate random values
    let userId = i;
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let userName = faker.internet.userName();
    let companiesApplied = faker.random.number();

    // create users and push into users array
    users.push({
      'userId': userId,
      'firstName': firstName,
      'lastName': lastName,
      'userName': userName,
      'companiesApplied': companiesApplied
    });
  }

  return users;

};

data.companies = generateCompanyData();
data.offers = generateOfferData();
data.users = generateUsersData();

// stringify data object
let jsonData = JSON.stringify(data, null, 2);


// write json data to file
fs.writeFile(dataPath, jsonData, 'utf8', (err) => {
  if (err) {
    console.log('UH-OH: ', err);
  } else {
    console.log('Data written to file!');
  }
});
