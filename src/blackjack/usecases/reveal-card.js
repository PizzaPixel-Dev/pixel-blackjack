import takeCard from './take-card';
import cardValue from './card-value';
import {state} from './game-state';

/**
 * 
 * @param {Array<string>} deck 
 * @param {Number} playerIndex 
 * @param {Array<Object>} playerQty 
 * @returns {HTMLImageElement} imgCard
 */

export const revealCard = (playerIndex) => {

    const takenCard = takeCard(state.deck);
    const value = cardValue(takenCard);
    const cpuIndex = state.playerQty.length - 1;
    state.playerQty[playerIndex].score += value;
    const scoreId = (playerIndex === cpuIndex) ? '#score-cpu' : `#score-${playerIndex}`;
    document.querySelector(scoreId).innerText = state.playerQty[playerIndex].score;
    const imgCard = document.createElement('img');
    imgCard.src = `/assets/cards/${takenCard}.png`;
    imgCard.classList.add('cards');
    if (state.playerQty[playerIndex].score > 21) {
        const panelId = (playerIndex === cpuIndex) ? 'panel-cpu' : `panel-${playerIndex}`;
        document.getElementById(panelId)?.classList.add('busted');
    }
    return imgCard;
}

export default revealCard;