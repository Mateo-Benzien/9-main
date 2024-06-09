const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement | null;
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement | null;
const userNameDisplay = document.querySelector('#user') as HTMLElement | null;
import { LoyaltyUser, Permissions } from './enums';

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? '⭐' : '';
    if (reviewTotalDisplay) {
        reviewTotalDisplay.innerHTML = `${value} Review${makeMultiple(value)} | last reviewed by ${reviewer} ${iconDisplay}`;
    }
}

export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning && returningUserDisplay) {
        returningUserDisplay.innerHTML = 'back';
    }
    if (userNameDisplay) {
        userNameDisplay.innerHTML = userName;
    }
}

export function showDetails(value: boolean | Permissions, element: HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = `${price}/night`;
        element.appendChild(priceDisplay);
    }
}

export function makeMultiple(value: number): string {
    return value > 1 || value === 0 ? 's' : '';
}
