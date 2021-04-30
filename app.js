// import functions and grab DOM elements
import {
    getHappinessImage,
    getStrengthImage,
} from './utils.js';

const happinessInput = document.getElementByI('happiness-input');

const strengthInput = document.getElementById('strength-input');

const button = document.getElementById('create-button');
const getHappinessImage = document.getElementById('happiness-image');
const getStrengthImage = document.getElementById('strength-image');



// initialize state
button.addEventListener('click', () => {
    //get all the values of the inputs
    const happinessLevel = happinessInput.value;
    const strengthLevel = strengthInput.value;

const happinessImageUrl = getHappinessImage(happinessLevel);
const strengthImageUrl = getStrengthImage(strengthLevel);

console.log(happinessUrl, strengthUrl)

getHappinessImage.src = happinessImageUrl;
    strengthImageUrl.src = strengthImageUrl;
})
// set event listeners to update state and DOM