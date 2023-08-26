"use strict";
//hardcode in html?
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

const Seattle = {
  location: "Seattle",
  lowCust: 23,
  highCust: 65,
  cookiesPerCust: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  totalDaily: 0,
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const randomCust = getRandomInt(this.lowCust, this.highCust);
      this.custPerHour.push(randomCust);
    }
  },
  countCookies: function () {
    for (let i = 0; i < this.custPerHour.length; i++) {
      const soldCookies = this.custPerHour[i] * this.cookiesPerCust;
      this.cookiesPerHour.push(soldCookies.toFixed(0));
      this.totalDaily += soldCookies;
    }
  },
  render: function () {
    console.log("render method called");
    // let table = doucment.getElementById storeID
    // let newTableRow = document.createElement("tr")
    //here starte a for loop that adds a td element for each time/sale/datapoint
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
  },
};

// Seattle.getCustPerHour();
// Seattle.countCookies();
// Seattle.render();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Tokyo = {
  location: "Tokyo",
  lowCust: 3,
  highCust: 24,
  cookiesPerCust: 1.2,
  custPerHour: [],
  cookiesPerHour: [],
  totalDaily: 0,
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const randomCust = getRandomInt(this.lowCust, this.highCust);
      this.custPerHour.push(randomCust);
    }
  },
  countCookies: function () {
    for (let i = 0; i < this.custPerHour.length; i++) {
      const soldCookies = this.custPerHour[i] * this.cookiesPerCust;
      this.cookiesPerHour.push(soldCookies.toFixed(0));
      this.totalDaily += soldCookies;
    }
  },
  render: function () {
    console.log("render method called");
    // let table = doucment.getElementById storeID
    // let newTableRow = document.createElement("tr")
    //here starte a for loop that adds a td element for each time/sale/datapoint
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
  },
};

const cookieStores = [Seattle, Tokyo];

function renderTableBody() {
  for (let i = 0; i < cookieStores.length; i++) {
    cookieStores[i].getCustPerHour();
    cookieStores[i].countCookies();
    cookieStores[i].render();
  }
}

renderTableBody();
