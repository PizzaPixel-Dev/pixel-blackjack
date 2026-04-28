import _ from "underscore";
import {state} from './game-state';


/**
 * 
 * @param {Array<strign>} deck - ej: []
 * @param {Array<strign>} types - ej: ['H', 'D', 'S', 'C']
 * @param {Array<strign>} specials - ej: ['A', 'J', 'Q', 'K']
 * @returns {Array<strign>}
 */

export const createDeck = () => {

    btnNewGame.disabled = true;
    const { types, specials } = state;
    state.deck = [];
    for(let i = 2; i <= 10; i++) {
        for (let type of types) {
            state.deck.push(i + type);
        }
    }
    for (let special of specials) {
        for (let type of types) {
            state.deck.push(special + type);
        }
    }
    state.deck = _.shuffle(state.deck);
}

export default createDeck;