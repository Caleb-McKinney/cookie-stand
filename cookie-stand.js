'use strict';

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
  "8pm"
];

const Seattle = {
  location: 'Seattle',
  lowCust: 23,
  highCust: 65,
  cookiesPerCust: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  totalDaily: 0,
  getCustPerHour: function() {
    for (let i = 0; i < hours.length; i++) {
      const randomCust = getRandomInt(this.lowCust, this.highCust);
      this.custPerHour.push(randomCust);
    }
  },
  countCookies: function() {
    for (let i = 0; i < this.custPerHour.length; i++) {
      const soldCookies = this.custPerHour[i] * this.cookiesPerCust;
      this.cookiesPerHour.push(soldCookies);
      this.totalDaily += soldCookies;
    }
  },
  render: function() {
    console.log("render method called");
    let seattleList = document.getElementById("seattle-list");
    for (let i = 0; i < hours.length; i++) {
      let hour = hours[i];
      let listItem = document.createElement('li');
      listItem.textContent = `${hour}: ${this.cookiesPerHour[i]} cookies`;
      seattleList.appendChild(listItem);
    }
  }
};

Seattle.getCustPerHour();
Seattle.countCookies();
Seattle.render();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
