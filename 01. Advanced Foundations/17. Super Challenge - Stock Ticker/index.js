import {getStockData} from './fakeStockAPI.js';

const sahamName = document.getElementById('name');
const sahamSymbol = document.getElementById('symbol');
const sahamPrice = document.getElementById('price');
const sahamPriceIcon = document.getElementById('price-icon');
const sahamTime = document.getElementById('time');

// memori
let previousPrice = null;

setInterval(function() {
    const saham = getStockData();
    renderStockTicker(saham)
}, 1500);

function renderStockTicker(saham) {

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

    previousPrice = price;
}
