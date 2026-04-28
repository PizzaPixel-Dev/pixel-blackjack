import { dom } from "./game-dom";
import { highlightActivePlayer } from "./highlight-active-player";
import { state } from "./game-state";

/**
 * 
 * @param {Number} players 
 */
export const createPlayersUI = (players) => {
    dom.playersContainer.innerHTML = '';
    const cpuDiv = document.createElement('div');
    cpuDiv.classList.add('row', 'container');
    cpuDiv.innerHTML = `
        <div class="row name player-panel" id="panel-cpu">
            <h1>
                <span class="active-indicator">▶</span>
                <span class="player-name-label">CPU</span>
                <span class="score-badge" id="score-cpu">0</span>
            </h1>
            <div id="cpu-cards"></div>
        </div>
    `;
    dom.playersContainer.append(cpuDiv);
    for (let i = 0; i < players; i++) {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('col', 'container');
        playerDiv.innerHTML = `
            <div class="row name player-panel" id="panel-${i}">
                <h1>
                    <span class="active-indicator">▶</span>
                    <span class="player-name-label">${state.playerLabel} ${i + 1}</span>
                    <span class="score-badge" id="score-${i}">0</span>
                </h1>
                <div id="player-cards-${i}" class="cards-players"></div>
            </div>
        `;
        dom.playersContainer.append(playerDiv);
    }
    highlightActivePlayer();
}