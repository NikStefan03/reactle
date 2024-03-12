let coins = document.getElementById('coins');
let firstItem = document.getElementById('buyFirst');
let secondItem = document.getElementById('buySecond');
let thirdItem = document.getElementById('buyThird');
let fourthItem = document.getElementById('buyFourth');
    

firstItem.addEventListener('click', function(){
    // Store the background color to be applied on the index.html page
    localStorage.setItem('backgroundColor', 'rgba(46, 46, 46, 0.913)');
});

secondItem.addEventListener('click', function(){
    // Store the background color to be applied on the index.html page
    localStorage.setItem('backgroundColor', 'rgba(0, 90, 255, 0.66)');
});

thirdItem.addEventListener('click', function(){
    // Store the background color to be applied on the index.html page
    localStorage.setItem('backgroundColor', 'rgba(255, 143, 0, 0.73)');
});

fourthItem.addEventListener('click', function(){
    // Store the background color to be applied on the index.html page
    localStorage.setItem('backgroundColor', 'rgba(255, 0, 0, 0.73)');
});

// This should be in your scriptForShop.js
window.onload = function() {
    let savedCoins = localStorage.getItem('coins');
    if (savedCoins) {
        coins.innerHTML = savedCoins;
    }
}






