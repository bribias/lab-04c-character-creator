export function getHappinessImage(someHappinessNumber) {
    if (someHappinessNumber > 7) {
        return 'http://placebeard.it/176/150?22';
    } else if (someHappinessNumber < 4) {
        return 'http://placebeard.it/179/150?27';
    }
    else {
        return 'http://placebeard.it/107/150?16';
    }
}

export function getStrengthImage(someStrengthNumer) {
    if (someStrengthNumer > 7) {
        return 'https://www.fillmurray.com/284/196';
    } else if (someStrengthNumer < 4) {
        return 'https://www.fillmurray.com/g/155/300';
    }
    else {
        return 'https://www.fillmurray.com/g/140/100';
    }
}