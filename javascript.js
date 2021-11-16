const apikey = "121be7e3660d3c4c9ffa60ca6d43801ae8c012c5";

function ticker() {
  fetch(
    "https://api.nomics.com/v1/currencies/ticker?key=121be7e3660d3c4c9ffa60ca6d43801ae8c012c5&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1"

  )
    .then((response) => response.json())
    .then(displayticker);
}

function displayticker(data) {
  // console.log(data);
  var html = "";
  for (let coin of data) {
    html += `
      <span>${coin.name}: $${coin.price}</span>
    `;

  }

  document.querySelector("aside").innerHTML = html;
}

ticker();
setInterval(ticker, 10000);

// capture input date into a var

// document.getElementById('date').addEventListener('change', function () {

//   var inputDate = this.value

//   var getHistoricalPriceAPI = `https://api.nomics.com/v1/exchange-rates/history?key=121be7e3660d3c4c9ffa60ca6d43801ae8c012c5&currency=BTC&start=${inputDate}T00%3A00%3A00Z&end=${inputDate}T00%3A00%3A00Z`

//   fetch(getHistoricalPriceAPI).then(function (response) {
//     response.json().then(function (data) {
//       console.log(data)
//     })
//   })

// })

let date
let selectedCoin

var getDate = document.getElementById('date').addEventListener('change', function () {
  date = this.value;
  console.log("inside", date)
})

var coinEl = document.getElementById('crypto').addEventListener('change', function() {
  selectedCoin = this.value
  console.log("inside", selectedCoin)
})

let historicalPrice

var searchBtn = document.getElementById('search-btn').addEventListener('click', function () {
  var getHistoricalPriceAPI = `https://api.nomics.com/v1/exchange-rates/history?key=121be7e3660d3c4c9ffa60ca6d43801ae8c012c5&currency=${selectedCoin}&start=${date}T00%3A00%3A00Z&end=${date}T00%3A00%3A00Z`

  fetch(getHistoricalPriceAPI).then(function (response) {
    response.json().then(function (data) {
      historicalPrice = data[0].rate
      console.log("inside", historicalPrice)
    })
  })
})

console.log(historicalPrice)

let historicalEl = document.querySelector('historical-price');
historicalEl.innerHTML = "<h1>hello</h1>";

// console.log(inputDate)
// api url for historical data
// "https://api.nomics.com/v1/exchange-rates/history?key=121be7e3660d3c4c9ffa60ca6d43801ae8c012c5&currency=BTC&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z"
// var getHistoricalPriceAPI = `https://api.nomics.com/v1/exchange-rates/history?key=121be7e3660d3c4c9ffa60ca6d43801ae8c012c5&currency=BTC&start=${date}T00%3A00%3A00Z&end=${date}T00%3A00%3A00Z`

// fetch(getHistoricalPriceAPI).then(function(response) {
//   response.json().then(function(data) {
//     console.log(data)
//   })
// })