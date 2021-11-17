const apikey = "121be7e3660d3c4c9ffa60ca6d43801ae8c012c5";

function ticker() {
  fetch(
    "https://api.nomics.com/v1/currencies/ticker?key=121be7e3660d3c4c9ffa60ca6d43801ae8c012c5&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1"
  )
    .then((response) => response.json())
    .then(displayticker);
}

function displayticker(data) {
  console.log(data);
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
