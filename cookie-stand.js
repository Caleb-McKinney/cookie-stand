"use strict";

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];

function renderTableHeader(){
  const tableElm = document.getElementById('cookie-data-table');
  const headerRow = document.createElement('tr');

  const blankThElem = document.createElement("th");
  headerRow.appendChild(blankThElem);

  for(let i = 0; i < hours.length; i++){
    const tdElem = document.createElement('th')
    tdElem.textContent = hours[i];
    headerRow.appendChild(tdElem);
  }

  const dailyTotalTdElem = document.createElement('td');
  dailyTotalTdElem.textContent = "Daily Location Total";
  headerRow.appendChild(dailyTotalTdElem);


  tableElm.appendChild(headerRow);
}

renderTableHeader();


function Store(location, lowCust, highCust, cookiesPerCust) {
  this.location = location;
  this.lowCust = lowCust;
  this.highCust = highCust;
  this.cookiesPerCust = cookiesPerCust;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.totalDaily = 0;

  this.getCustPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
      const randomCust = getRandomInt(this.lowCust, this.highCust);
      this.custPerHour.push(randomCust);
    }
  };

  this.countCookies = function () {
    for (let i = 0; i < this.custPerHour.length; i++) {
      const soldCookies = this.custPerHour[i] * this.cookiesPerCust;
      this.cookiesPerHour.push(soldCookies.toFixed(0));
      this.totalDaily += soldCookies;
    }
  };

  this.render = function () {
    const salesContainer = document.getElementById("sales");

    const headingElement = document.createElement("h2");
    headingElement.textContent = this.location;
    salesContainer.appendChild(headingElement);

    let storeList = document.createElement("ul");
    for (let i = 0; i < hours.length; i++) {
      let hour = hours[i];
      let listItem = document.createElement("li");
      listItem.textContent = `${hour}: ${this.cookiesPerHour[i]} cookies`;
      storeList.appendChild(listItem);
    }
    const dailyTotalElement = document.createElement("li");
    dailyTotalElement.textContent = `Total: ${this.totalDaily.toFixed(
      0
    )} cookies`;
    storeList.appendChild(dailyTotalElement);
    salesContainer.appendChild(storeList);
  };

  this.getCustPerHour();
  this.countCookies();
  this.render();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Usage
const seattleStore = new Store("Seattle", 23, 65, 6.3);
const tokyoStore = new Store("Tokyo", 3, 24, 1.2);
const dubaiStore = new Store("Dubai", 11, 38, 3.7);
const parisStore = new Store("Paris", 20, 38, 2.3);
const limaStore = new Store("Lima", 2, 16, 4.6);
// renderTableBody();

// const Tokyo = {
//   location: "Tokyo",
//   lowCust: 3,
//   highCust: 24,
//   cookiesPerCust: 1.2,
//   custPerHour: [],
//   cookiesPerHour: [],
//   totalDaily: 0,
//   getCustPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       const randomCust = getRandomInt(this.lowCust, this.highCust);
//       this.custPerHour.push(randomCust);
//     }
//   },
//   countCookies: function () {
//     for (let i = 0; i < this.custPerHour.length; i++) {
//       const soldCookies = this.custPerHour[i] * this.cookiesPerCust;
//       this.cookiesPerHour.push(soldCookies.toFixed(0));
//       this.totalDaily += soldCookies;
//     }
//   },
//   render: function () {
//     console.log("render method called");
//     // let table = doucment.getElementById storeID
//     // let newTableRow = document.createElement("tr")
//     //here starte a for loop that adds a td element for each time/sale/datapoint
//     const salesContainer = document.getElementById("sales");

//     const headingElement = document.createElement("h2");
//     headingElement.textContent = this.location;
//     salesContainer.appendChild(headingElement);

//     let storeList = document.createElement("ul");
//     for (let i = 0; i < hours.length; i++) {
//       let hour = hours[i];
//       let listItem = document.createElement("li");
//       listItem.textContent = `${hour}: ${this.cookiesPerHour[i]} cookies`;
//       storeList.appendChild(listItem);
//     }
//     const dailyTotalElement = document.createElement("li");
//     dailyTotalElement.textContent = `Total: ${this.totalDaily.toFixed(
//       0
//     )} cookies`;
//     storeList.appendChild(dailyTotalElement);
//     salesContainer.appendChild(storeList);
//   },
// };

// const Dubai = {
//   location: "Dubai",
//   lowCust: 11,
//   highCust: 38,
//   cookiesPerCust: 3.7,
//   custPerHour: [],
//   cookiesPerHour: [],
//   totalDaily: 0,
//   getCustPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       const randomCust = getRandomInt(this.lowCust, this.highCust);
//       this.custPerHour.push(randomCust);
//     }
//   },
//   countCookies: function () {
//     for (let i = 0; i < this.custPerHour.length; i++) {
//       const soldCookies = this.custPerHour[i] * this.cookiesPerCust;
//       this.cookiesPerHour.push(soldCookies.toFixed(0));
//       this.totalDaily += soldCookies;
//     }
//   },
//   render: function () {
//     console.log("render method called");
//     // let table = doucment.getElementById storeID
//     // let newTableRow = document.createElement("tr")
//     //here starte a for loop that adds a td element for each time/sale/datapoint
//     const salesContainer = document.getElementById("sales");

//     const headingElement = document.createElement("h2");
//     headingElement.textContent = this.location;
//     salesContainer.appendChild(headingElement);

//     let storeList = document.createElement("ul");
//     for (let i = 0; i < hours.length; i++) {
//       let hour = hours[i];
//       let listItem = document.createElement("li");
//       listItem.textContent = `${hour}: ${this.cookiesPerHour[i]} cookies`;
//       storeList.appendChild(listItem);
//     }
//     const dailyTotalElement = document.createElement("li");
//     dailyTotalElement.textContent = `Total: ${this.totalDaily.toFixed(
//       0
//     )} cookies`;
//     storeList.appendChild(dailyTotalElement);
//     salesContainer.appendChild(storeList);
//   },
// };

// const Paris = {
//   location: "Paris",
//   lowCust: 20,
//   highCust: 38,
//   cookiesPerCust: 2.3,
//   custPerHour: [],
//   cookiesPerHour: [],
//   totalDaily: 0,
//   getCustPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       const randomCust = getRandomInt(this.lowCust, this.highCust);
//       this.custPerHour.push(randomCust);
//     }
//   },
//   countCookies: function () {
//     for (let i = 0; i < this.custPerHour.length; i++) {
//       const soldCookies = this.custPerHour[i] * this.cookiesPerCust;
//       this.cookiesPerHour.push(soldCookies.toFixed(0));
//       this.totalDaily += soldCookies;
//     }
//   },
//   render: function () {
//     console.log("render method called");
//     // let table = doucment.getElementById storeID
//     // let newTableRow = document.createElement("tr")
//     //here starte a for loop that adds a td element for each time/sale/datapoint
//     const salesContainer = document.getElementById("sales");

//     const headingElement = document.createElement("h2");
//     headingElement.textContent = this.location;
//     salesContainer.appendChild(headingElement);

//     let storeList = document.createElement("ul");
//     for (let i = 0; i < hours.length; i++) {
//       let hour = hours[i];
//       let listItem = document.createElement("li");
//       listItem.textContent = `${hour}: ${this.cookiesPerHour[i]} cookies`;
//       storeList.appendChild(listItem);
//     }
//     const dailyTotalElement = document.createElement("li");
//     dailyTotalElement.textContent = `Total: ${this.totalDaily.toFixed(
//       0
//     )} cookies`;
//     storeList.appendChild(dailyTotalElement);
//     salesContainer.appendChild(storeList);
//   },
// };

// const Lima = {
//   location: "Lima",
//   lowCust: 2,
//   highCust: 16,
//   cookiesPerCust: 4.6,
//   custPerHour: [],
//   cookiesPerHour: [],
//   totalDaily: 0,
//   getCustPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       const randomCust = getRandomInt(this.lowCust, this.highCust);
//       this.custPerHour.push(randomCust);
//     }
//   },
//   countCookies: function () {
//     for (let i = 0; i < this.custPerHour.length; i++) {
//       const soldCookies = this.custPerHour[i] * this.cookiesPerCust;
//       this.cookiesPerHour.push(soldCookies.toFixed(0));
//       this.totalDaily += soldCookies;
//     }
//   },
//   render: function () {
//     console.log("render method called");
//     // let table = doucment.getElementById storeID
//     // let newTableRow = document.createElement("tr")
//     //here starte a for loop that adds a td element for each time/sale/datapoint
//     const salesContainer = document.getElementById("sales");

//     const headingElement = document.createElement("h2");
//     headingElement.textContent = this.location;
//     salesContainer.appendChild(headingElement);

//     let storeList = document.createElement("ul");
//     for (let i = 0; i < hours.length; i++) {
//       let hour = hours[i];
//       let listItem = document.createElement("li");
//       listItem.textContent = `${hour}: ${this.cookiesPerHour[i]} cookies`;
//       storeList.appendChild(listItem);
//     }
//     const dailyTotalElement = document.createElement("li");
//     dailyTotalElement.textContent = `Total: ${this.totalDaily.toFixed(
//       0
//     )} cookies`;
//     storeList.appendChild(dailyTotalElement);
//     salesContainer.appendChild(storeList);
//   },
// };

// const cookieStores = [Seattle, Tokyo, Dubai, Paris, Lima];

// function renderTableBody() {
//   for (let i = 0; i < cookieStores.length; i++) {
//     cookieStores[i].getCustPerHour();
//     cookieStores[i].countCookies();
//     cookieStores[i].render();
//   }

// }
