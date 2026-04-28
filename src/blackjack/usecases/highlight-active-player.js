import { state } from "./game-state";


export const highlightActivePlayer = () => {
    document.querySelectorAll('.player-panel').forEach(p => p.classList.remove('active-player'));
    const cpuIndex = state.playerQty.length - 1;
    const panelId = (state.currentPlayer === cpuIndex) ? 'panel-cpu' : `panel-${state.currentPlayer}`;
    const activePanel = document.getElementById(panelId);
    if (activePanel) activePanel.classList.add('active-player');
}