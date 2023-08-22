const seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerSale: 6.3,
  hourlySales: [],

  // Method to generate random customers and calculate sales
  generateHourlySales: function () {
    for (let hour = 6; hour <= 19; hour++) {
      const customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      const cookiesSold = Math.round(customers * this.avgCookiesPerSale);
      this.hourlySales.push(`${hour}am: ${cookiesSold} cookies`);
    }
  }
};

// You can create similar objects for other locations (Tokyo, Dubai, Paris, Lima)

// Call the method to generate sales data
seattle.generateHourlySales();

// Display the results in HTML
const seattleList = document.getElementById('seattle-list');
for (const sale of seattle.hourlySales) {
  const listItem = document.createElement('li');
  listItem.textContent = sale;
  seattleList.appendChild(listItem);
}

// Repeat the above process for other locations and display them in separate lists
// ...

// Calculate and display total cookies
const seattleTotal = seattle.hourlySales.reduce((total, sale) => {
  const cookies = parseInt(sale.split(':')[1]);
  return total + cookies;
}, 0);

const seattleTotalItem = document.createElement('li');
seattleTotalItem.textContent = `Total: ${seattleTotal} cookies`;
seattleList.appendChild(seattleTotalItem);