// import functions and grab DOM elements
import {
    getHappinessImage,
    getStrengthImage,
} from './utils.js';

const happinessInput = document.getElementById('happiness-input');
const strengthInput = document.getElementById('strength-input');

const button = document.getElementById('create-button');

const happyEl = document.getElementById('happiness-image');
const strengthEl = document.getElementById('strength-image');



// initialize state
button.addEventListener('click', () => {
    //get all the values of the inputs
    // const happinessLevel = happinessInput.value;
    // const strengthLevel = strengthInput.value;

const happinessImageUrl = getHappinessImage(happinessInput.value);
const strengthImageUrl = getStrengthImage(strengthInput.value);

happyEl.src = happinessImageUrl;
strengthEl.src = strengthImageUrl;

})
// set event listeners to update state and DOM