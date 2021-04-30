export function getHappinessImage(someHappinessNumber) {
    if (someHappinessNumber > 7) {
        return 'https://img1.wsimg.com/isteam/ip/f9769a59-a6b9-4e5e-8893-3ca270b404ce/crazyDog.jpg';
    } else if (someHappinessNumber > 3) {
        return '.assets/neutral.png';
    }
    else {
        return './assets/sad.png';
    }
}

export function getStrengthImage(someStrengthNumer) {
    if (someStrengthNumer > 7) {
        return './assets/strong.png';
    } else if (someStrengthNumer > 3) {
        return '.assets/normal.png';
    }
    else {
        return 'https://i.pinimg.com/originals/02/6e/97/026e974c107c9cf17ab93668a62d5c42.png';
    }
}