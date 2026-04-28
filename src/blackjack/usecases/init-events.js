import { state } from "./game-state";
import { dom } from "./game-dom";
import { initGame, nextTurn, createPlayersUI, gameLang, revealCard  } from "./index";

/**
 * 
 * @param {Number} index 
 * @returns Element
 */
const getPlayerCards = (index) => document.querySelector(`#player-cards-${index}`);

export const initEvents = () => {
    dom.btnSpa.addEventListener('click', () => {
        dom.lang.setAttribute('lang', 'es');
        gameLang('es');
        dom.btnSpa.style.zIndex = -10;
        dom.btnEng.style.zIndex = -10;
        dom.ovelayLang.style.zIndex = -10;
    });

    dom.btnEng.addEventListener('click', () => {
        dom.lang.setAttribute('lang', 'en');
        gameLang('en');
        dom.btnSpa.style.zIndex = -10;
        dom.btnEng.style.zIndex = -10;
        dom.ovelayLang.style.zIndex = -10;
    });

    dom.btnStart.addEventListener('click', () => {
        dom.btnStart.style.zIndex = -1;
        dom.titleImg.style.zIndex = -1;
        dom.btn1Player.style.display = 'block';
        dom.btn2Players.style.display = 'block';
        dom.btn3Players.style.display = 'block';
        dom.askPlayers.style.display = 'block';
    });

    dom.btn1Player.addEventListener('click', () => {
        state.totalPlayers = 1;
        initGame(1);
        createPlayersUI(1);
        dom.overlay.style.zIndex = -3;
        dom.askPlayers.style.zIndex = -3;
    });

    dom.btn2Players.addEventListener('click', () => {
        state.totalPlayers = 2;
        initGame(2);
        createPlayersUI(2);
        dom.overlay.style.zIndex = -3;
        dom.askPlayers.style.zIndex = -3;
    });

    dom.btn3Players.addEventListener('click', () => {
        state.totalPlayers = 3;
        initGame(3);
        createPlayersUI(3);
        dom.overlay.style.zIndex = -3;
        dom.askPlayers.style.zIndex = -3;
    });

    dom.btnTake.addEventListener('click', () => {
        getPlayerCards(state.currentPlayer).append(revealCard(state.currentPlayer));
        const score = state.playerQty[state.currentPlayer].score;
        (score >= 21) ? nextTurn() : null;
    });

    dom.btnStop.addEventListener('click', () => {
        if (state.currentPlayer === state.playerQty.length - 1) dom.btnTake.disabled = dom.btnStop.disabled = true;
        nextTurn();
    });

    dom.btnNewGame.addEventListener('click', () => {
        state.playerQty = [];
        state.currentPlayer = 0;
        dom.playersContainer.innerHTML = '';
        initGame(state.totalPlayers);
        createPlayersUI(state.totalPlayers);
        dom.btnTake.disabled = btnStop.disabled = false;
        dom.resultSign.remove();
    });
}