import { highlightActivePlayer } from "./highlight-active-player";
import { state } from "./game-state";
import { scoreValidate } from "./score-validate";
import { cpuTime } from "./cpu-time";

export const nextTurn = () => {
    state.playerQty[state.currentPlayer].isPlaying = false;
    state.currentPlayer++;
    if (state.currentPlayer === state.playerQty.length - 1) {
        highlightActivePlayer();
        cpuTime(scoreValidate());
    } else {
        state.playerQty[state.currentPlayer].isPlaying = true;
        highlightActivePlayer();
    }
}