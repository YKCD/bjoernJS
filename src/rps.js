const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const FIGURES = [ROCK, PAPER, SCISSORS];

function randomFigure(figures) {
    return figures[Math.floor(Math.random() * 3) + 1];
}

/**
 * Returns -1 if the first figure wins, 0 in a draw and 1 if second figure wins.
 * 
 * @param {number} figure1
 * @param {number} figure2
 */
// TODO use currying for elegance
function fight(figureOrder, figure1, figure2) {
    // bigger number wins
    const diff = figure2 - figure1;

    // clamp value to [-1; 1]
    const winner = Math.max(Math.min(diff, 1), -1);

    // test for edge case when rock meets scissors
    const min = Math.min(figure1, figure2);
    const max = Math.max(figure1, figure2);

    if (min === figureOrder[0] && max === figureOrder[figureOrder.length - 1]) {
        return -winner;
    }

    return winner;
}

function printWinner(winner) {
    if (winner > 0) {
        console.log('Player2 wins');
    } else if (winner < 0) {
        console.log('Player1 wins');
    } else {
        console.log('The game ends in a draw');
    }
}


const player1 = randomFigure(FIGURES);
const player2 = randomFigure(FIGURES);

printWinner(fight(FIGURES, player1, player2));
