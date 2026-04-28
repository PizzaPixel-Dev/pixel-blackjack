/**
 * 
 * @param {String} card - ej: '3H' 
 * @returns {Number} cardValue - ej: 3
 */

const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    return (isNaN(value)) ? (value === 'A') ? 11 : 10 : value * 1;
}

export default cardValue;