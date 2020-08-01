'use strick'

//news update message
const myHeading = document.querySelector('p.update-message');
myHeading.textContent = "Experience with latest updates!";

document.querySelector('.update-message').onclick = function () {
    alert('Stay on focus!');
};

//change site logo onclick
let siteLogo = document.querySelector('img');

siteLogo.onclick = function () {

    let attributeSrc = siteLogo.getAttribute('src');
    let attributeSrcValue = 'images/site-logo.png';
    let attributeSrcNewValue = 'images/calendar-late.png';

    if (attributeSrc === attributeSrcValue) {
        siteLogo.setAttribute('src', attributeSrcNewValue);
    } else {
        siteLogo.setAttribute('src', attributeSrcValue);
    }
}

//set welcome message
let welcomeText = document.querySelector('#welcome-message');

(function () {
    let localData = localStorage.getItem('userName');
    if (!localData || localData != '') {
        getUserName();
    } else {
        let getLocalStorageName = localStorage.getItem('userName');
        welcomeText.textContent = `Hi ${getLocalStorageName}! ${welcomeText.textContent}`;
    }
})();

function getUserName() {
    let userName = prompt('Please enter the Username.');
    if (userName != null && userName != '') {
        localStorage.setItem('userName', userName);
        welcomeText.textContent = `Hi ${userName.toLocaleUpperCase()}! ${welcomeText.textContent}`;
    } else {
        getUserName();
    }
}
