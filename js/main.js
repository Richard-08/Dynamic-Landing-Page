// DOM Elements

const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const focus = document.querySelector('.focus');

const showAmPm = true;

// Show Time

function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zero

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting

// "url('https://i.ibb.co/7vDLJFb/morning.jpg')"
// "url('https://i.ibb.co/3mThcXc/afternoon.jpg')"
// "url('https://i.ibb.co/924T2Wv/night.jpg')"

function setBgGreet() {
    let today = new Date();
    let hour = today.getHours();

    if (hour < 12) {
        document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
        document.body.style.backgroundSize = '100% 100%';
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        document.body.style.backgroundSize = '100% 100%';
        greeting.textContent = 'Good Afternoon';
    } else {
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        document.body.style.backgroundSize = '100% 100%';
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}


// Set Name

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Set Focus

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Get Name

function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
};

// Get Focus

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
};

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus()