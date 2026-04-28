import { state } from "./game-state";
import { dom } from "./game-dom";
import {scoreValidate} from "./score-validate";



export const result = () => {
    const cpuIndex = state.playerQty.length - 1;
    const cpuScore = state.playerQty[cpuIndex].score;
    dom.resultSign.classList.add('resultSign');
    const bestScore = scoreValidate();
    const winners = state.playerQty
        .slice(0, cpuIndex)
        .filter(p => p.score <= 21 && (cpuScore > 21 || p.score > cpuScore) && p.score === bestScore);

    const isTie = winners.length > 1;

    let resultMessage;
    if (isTie) resultMessage = state.draw;
    else if (scoreValidate() <= 21 && cpuScore > 21) resultMessage = state.win;
    else resultMessage = state.lose;

    dom.resultSign.innerHTML = `<h1>${resultMessage}</h1>`;

    dom.divGame.append(dom.resultSign);
    dom.btnNewGame.disabled = false;
    document.querySelectorAll('.player-panel').forEach(p => p.classList.remove('active-player'));
    
    state.playerQty.slice(0, cpuIndex).forEach((player, i) => {
        const panelId = `panel-${i}`;
        const won = player.score <= 21
            && (cpuScore > 21 || player.score > cpuScore)
            && player.score === bestScore;
    
        let className;
        if (won && isTie) className = 'tied';
        else if (won) className = 'winner';
        else className = 'busted';
    
        document.getElementById(panelId)?.classList.add(className);
    });
    const cpuPanel = document.getElementById('panel-cpu');
    if (cpuScore <= 21 && cpuScore >= scoreValidate()) {
        cpuPanel?.classList.add('winner');
    }
}