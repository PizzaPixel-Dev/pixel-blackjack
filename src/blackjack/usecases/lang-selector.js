import { dom } from "./game-dom";
import { state } from "./game-state";

/**
 * 
 * @param {String} lang | ej: 'es'
 */
export const gameLang = (lang) => {
        fetch(`/pixel-blackjack/assets/json/${lang}.json`)
            .then(response => response.json())
            .then(data => {
                state.win = data.win;
                state.lose = data.lose;
                state.draw = data.draw;
                dom.btnStart.innerText = data.btnStart;
                dom.btnNewGame.innerText = data.btnNewGame;
                dom.btnTake.innerText = data.btnTake;
                dom.btnStop.innerText = data.btnStop;
                state.playerLabel = data.player;
                dom.askPlayers.innerText = data.askPlayers;
            });
    }