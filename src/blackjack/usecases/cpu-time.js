import { state } from "./game-state";
import { dom } from "./game-dom";
import {revealCard} from "./reveal-card";
import { result } from "./result";

/**
 * 
 * @param {Number} minScore 
 */
export const cpuTime = (minScore) => {
    dom.btnTake.disabled = true;
    dom.btnStop.disabled = true;
    const cpuIndex = state.playerQty.length - 1;
    const cpuCards = document.querySelector('#cpu-cards');
    const cpuLoop = () => {
        cpuCards.append(revealCard(cpuIndex));
        (state.playerQty[cpuIndex].score < minScore) ? setTimeout(cpuLoop, 750) : result();
    };
    (minScore > 21) ? (cpuCards.append(revealCard(cpuIndex)), result()) : cpuLoop();
};