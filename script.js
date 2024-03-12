let button = document.getElementById('btn');
let clickTimes = [];
let totalClickTime = 0;
let coins = document.getElementById('coins');
let buttonsCreated = document.getElementsByClassName('newButtonId');

if(button){
    button.addEventListener('click', function(){
        createNewButton('buttonContainer');
        button.style.visibility = 'hidden';
    });
}

function createNewButton(containerId) {
    var newButton = document.createElement('button');
    newButton.style.position = 'absolute';
    newButton.style.margin = '5px'; // Adjust this value based on your actual button margin
    newButton.addEventListener('click', function() {
        coins.innerHTML = parseInt(coins.innerHTML) + 10;
        localStorage.setItem('coins', coins.innerHTML);
        this.style.visibility = 'hidden';
        createNewButton(containerId);
        let currentTime = new Date().getTime();
        if (clickTimes.length > 0) {
            let clickInterval = currentTime - clickTimes[clickTimes.length - 1];
            totalClickTime += clickInterval;
            if (clickTimes.length >= -2) {
                let averageClickTime = (totalClickTime / clickTimes.length).toFixed(1);
                document.getElementById('timer').innerHTML = 'Average time between clicks: <br>' + averageClickTime + ' ms';
            }}
            clickTimes.push(currentTime);
        this.style.visibility = 'hidden';
    });

    

    var container = document.getElementById(containerId);
    container.appendChild(newButton);

    newButton.style.top = Math.random() * (container.offsetHeight - newButton.offsetHeight - 10 * parseInt(newButton.style.margin)) + 'px';
    newButton.style.left = Math.random() * (container.offsetWidth - newButton.offsetWidth - 10 * parseInt(newButton.style.margin)) + 'px';

    newButton.className = 'newButton';
    newButton.id = 'newButtonId';
}

window.onload = function() {
    let savedCoins = localStorage.getItem('coins');
    if (savedCoins) {
        coins.innerHTML = savedCoins;
    }
}


let backgroundColor = localStorage.getItem('backgroundColor');
if (backgroundColor) {
    document.body.style.backgroundColor = backgroundColor;
}

window.onload = function() {
    let savedCoins = localStorage.getItem('coins');
    if (savedCoins) {
        coins.innerHTML = savedCoins;
    }

    // Apply the background color if it's stored in localStorage
    let backgroundColor = localStorage.getItem('backgroundColor');
    if (backgroundColor) {
        document.body.style.backgroundColor = backgroundColor;
    }
}
