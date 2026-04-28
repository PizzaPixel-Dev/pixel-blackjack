import { state } from "./game-state";



export const scoreValidate = () => {
    const validScores = state.playerQty
        .slice(0, state.playerQty.length - 1)
        .map(p => p.score)
        .filter(score => score <= 21);
    return (validScores.length > 0) ? Math.max(...validScores) : 0;
}