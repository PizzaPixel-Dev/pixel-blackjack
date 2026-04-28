import {state} from './game-state';

let deck = state.deck;

/**
 * 
 * @param {Array<string>} deck - ej: ['2C', 'QH', '9S', 'KS', '5C', 'AD', '6S', '6C', '10S', '8D', '10D', '4H', '5D', '3S', 'QC', 'JD', '8H', '2H', '10C', '2S', '7S', 'KD', '4C', '10H', '8S', '6D', '9H', '5S', 'JC', 'JH', '6H', '7D', '7C', '9C', 'AH', 'JS', '4D', '8C', 'QS', '9D', 'KC', '5H', '3C', 'KH', '2D', '3D', '4S', '7H', 'QD', 'AS', 'AC', '3H']
 * @returns {String} takenCard - Ej: '3H'
 */


const takeCard = () => {
    if (state.deck.length === 0) throw `No hay cartas en la baraja`;
    return state.deck.pop();
}

export default takeCard;