import createDeck from "./create-deck";
import { state } from "./game-state";

export const initGame = (players = 1) => {
    createDeck();
    for (let i = 0; i < players; i++) {
        state.playerQty.push({id: i, score: 0, isPlaying: i === 0});
    }
    state.playerQty.push({id: players, score: 0, isPlaying: false});
}