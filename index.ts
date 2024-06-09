// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
// Type Assignment and Type Interference
// add a isOpen variable and assign it the boolean type

// Function Return Types + Void Types mini-challenge
// Instead of having a long 'review total 3', can you make the line say '3 reviews', or '1 review'
// if there is only one? Use a function to do this and assing a type to the functions return.

import { showReviewTotal, populateUser, showDetails, makeMultiple } from './utils.ts';
import { Price, Country } from './types';
import { Permissions, LoyaltyUser } from './enums';

// Type Definitions
type Review = {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
    description?: string;
};

type Property = {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [number, string];
    isAvailable: boolean;
};

const propertyContainer = document.querySelector('.properties') as HTMLElement | null;
const footer = document.querySelector('.footer') as HTMLElement | null;

let isLoggedIn: boolean;
let isOpen: boolean = true;

// Reviews
const reviews: Review[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
        description: 'Great hosts, location was a bit further than said.'
    }
];

const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};

// Array of Properties
const properties: Property[] = [
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    }
];

// Placeholder function for getReviewMessage
function getReviewMessage(value: number): string {
    return `Total reviews: ${value}`;
}

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populateUser(you.isReturning, you.firstName);

// Add the properties
if (propertyContainer) {
    properties.forEach(property => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = property.title;
        const image = document.createElement('img');
        image.setAttribute('src', property.image);
        card.appendChild(image);
        showDetails(you.permissions, card, property.price);
        propertyContainer.appendChild(card);
    });
}

if (footer) {
    let currentLocation: [string, string, number] = ['London', '11.03', 17];
    footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`;
}
