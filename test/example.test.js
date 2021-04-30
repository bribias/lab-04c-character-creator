// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getHappinessImage, getStrengthImage } from '../utils.js'

const test = QUnit.test;

test('should take in a low number and return the sad image string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = './assets/sad.png';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getHappinessImage(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should take in a middle number and return the neutral image string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = './assets/neutral.png';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getHappinessImage(5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should take in a high number and return the happy image string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = './assets/happy.png';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getHappinessImage(9);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should take in a low number and return the tired image string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = './assets/tired.png';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getStrengthImage(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should take in a middle number and return the normal image string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = './assets/normal.png';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getStrengthImage(5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should take in a high number and return the strong image string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = './assets/strong.png';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getStrengthImage(9);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});