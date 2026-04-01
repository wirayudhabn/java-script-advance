// import
import {getStockData} from './fakeStockAPI.js';

// DOM
const sahamName = document.getElementById('name');
const sahamSymbol = document.getElementById('symbol');
const sahamPrice = document.getElementById('price');
const sahamPriceIcon = document.getElementById('price-icon');
const sahamTime = document.getElementById('time');

// otak
setInterval(function() {
    const saham = getStockData();
    renderStockTicker(saham)
}, 1500);

// memori
let previousPrice = null;

function renderStockTicker(saham) {

    // object destructuring
    const {name, sym, price, time} = saham
    
    // ternary operator
    let priceIcon = price > previousPrice ? 'images/green.png' 
    : price < previousPrice ? 'images/red.png' 
    : price === previousPrice ? 'images/grey.png'
    : 'images/grey.png';

    sahamName.textContent = name
    sahamSymbol.textContent = sym
    sahamPrice.textContent = price
    sahamPriceIcon.src = priceIcon
    sahamTime.textContent = time

    // menyimpan ke memori
    previousPrice = price;
}
