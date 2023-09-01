"use strict";

const city = {
  hours: [
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
  ],
};
let state = {
  hourTotals: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
grandTotal: 0
}
const stores = [];

const tableElm = document.getElementById("cookie-data-table");

function renderTableHeader() {
  const headerRow = document.createElement("tr");

  const blankThElem = document.createElement("th");
  headerRow.appendChild(blankThElem);

  for (let i = 0; i < city.hours.length; i++) {
    const tdElem = document.createElement("th");
    tdElem.textContent = city.hours[i];
    headerRow.appendChild(tdElem);
  }

  const dailyTotalTdElem = document.createElement("td");
  dailyTotalTdElem.textContent = "Daily Location Total";
  headerRow.appendChild(dailyTotalTdElem);

  tableElm.appendChild(headerRow);
}

renderTableHeader();

function renderTableBody() {
  console.log("testForLoops Called");
  let rowArrays = [];
  for (let m = 0; m < stores.length; m++) {
    rowArrays.push([]);
  }
  for (let j = 0; j < city.hours.length; j++) {
    let currentTime = city.hours[j];
    let tdElement = document.createElement("td");
    for (let k = 0; k < stores.length; k++) {
      let currentCity = stores[k];
      let currentCityHourSale = currentCity.cookiesPerHour[j];
      rowArrays[k].push(currentCityHourSale);
      // console.log(currentCityHourSale);
      tdElement.textContent = currentCityHourSale;
    }
  }
  console.log(rowArrays);
}
//constructor for store locations
function Store(location, lowCust, highCust, cookiesPerCust) {
  this.location = location;
  this.lowCust = lowCust;
  this.highCust = highCust;
  this.cookiesPerCust = cookiesPerCust;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.totalDaily = 0;
  
  this.getCustPerHour = function () {
    for (let i = 0; i < city.hours.length; i++) {
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
    const newRow = document.createElement('tr'); // creating new table row called newRow
    // const headingElement = document.createElement("h2");
    // headingElement.textContent = this.location;
    // salesContainer.appendChild(headingElement);

const locationData = document.createElement('td'); // creating table data called locationData
locationData.textContent = this.location;
newRow.appendChild(locationData);
// creating table data based off hours array
for (let i = 0; i < city.hours.length; i++) { 
  const tableData = document.createElement('td');
  tableData.textContent = this.cookiesPerHour[i];
  newRow.appendChild(tableData);
}
let locationTotalElement = document.createElement('td');
// console.log(this.totalDaily);
console.log(this.totalDaily);
console.log(typeof(this.totalDaily));
locationTotalElement.textContent = Math.ceil(this.totalDaily);
newRow.appendChild(locationTotalElement);
// appending new row to global table named tableElm
tableElm.appendChild(newRow);
     let storeList = document.createElement("ul");
    // for (let i = 0; i < city.hours.length; i++) {
      // let hour = city.hours[i];
    //   // let listItem = document.createElement("li");
    //   listItem.textContent = `${hour}: ${this.cookiesPerHour[i]} cookies`;
    //   storeList.appendChild(listItem);
    // }
  //   const dailyTotalElement = document.createElement("li");
  //   dailyTotalElement.textContent = `Total: ${this.totalDaily.toFixed(
  //     0
  //     )} cookies`;
  //   storeList.appendChild(dailyTotalElement);
  //   salesContainer.appendChild(storeList);
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

// function renderStores() {
//   for (let n = 0; n < stores.length; n++) {
//     stores[n].countCookies[i];
//     stores[i].render;
//   }
//   console.log(city);
// }

// Usage
const seattleStore = new Store("Seattle", 23, 65, 6.3);
const tokyoStore = new Store("Tokyo", 3, 24, 1.2);
const dubaiStore = new Store("Dubai", 11, 38, 3.7);
const parisStore = new Store("Paris", 20, 38, 2.3);
const limaStore = new Store("Lima", 2, 16, 4.6);
stores.push(seattleStore);
stores.push(tokyoStore);
stores.push(dubaiStore);
stores.push(parisStore);
stores.push(limaStore);

renderTableBody();
// Store.prototype.render = function () {
//   const rowElement = document.createElement("tr");
//   const nameElem = document.createElement("td");
//   nameElem.textContent = this.location;
//   rowElement.appendChild(nameElem);
  
//   city.tableElm.appendChild(rowElement);
// };

// for (let i = 0; i < stores.length; i++) {
//   stores[i].getCustPerHour();
//   stores[i].countCookies();
//   stores[i].render();
// }


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
