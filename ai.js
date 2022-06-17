

//html elements
const statusdiv = document.querySelector('.status');
const resetdiv = document.querySelector('.reset');
const celldivs = document.querySelectorAll('.game-cell');

//game constants

const xsymbol=  'Player 1';
const osymbol= 'Player 2';

// game variables
let gameIsLive = true;
let xIsNext = true;
let winner = null;

//function

const lettertosymbol = (letter) => letter === 'x' ? xsymbol: osymbol;

const handleWin = (letter) => {
    gameIsLive = false;
    winner = letter;
    if (winner === 'x') {
      statusdiv.innerHTML = `${lettertosymbol(letter)} has won!`;
    } else {
      statusdiv.innerHTML = `<span>${lettertosymbol(letter)} has won!</span>`;
    }
}

const checkGameStatus = () => {
    const topLeft = celldivs[0].classList[2];
    const topMiddle = celldivs[1].classList[2];
    const topRight = celldivs[2].classList[2];
    const middleLeft = celldivs[3].classList[2];
    const middleMiddle = celldivs[4].classList[2];
    const middleRight = celldivs[5].classList[2];
    const bottomLeft = celldivs[6].classList[2];
    const bottomMiddle = celldivs[7].classList[2];
    const bottomRight = celldivs[8].classList[2];

    //check winner 
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        handleWin(topLeft);
        celldivs[0].classList.add('won');
        celldivs[1].classList.add('won');
        celldivs[2].classList.add('won');
      } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
        handleWin(middleLeft);
        celldivs[3].classList.add('won');
        celldivs[4].classList.add('won');
        celldivs[5].classList.add('won');
      } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        handleWin(bottomLeft);
        celldivs[6].classList.add('won');
        celldivs[7].classList.add('won');
        celldivs[8].classList.add('won');
      } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
        handleWin(topLeft);
        celldivs[0].classList.add('won');
        celldivs[3].classList.add('won');
        celldivs[6].classList.add('won');
      } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        handleWin(topMiddle);
        celldivs[1].classList.add('won');
        celldivs[4].classList.add('won');
        celldivs[7].classList.add('won');
      } else if (topRight && topRight === middleRight && topRight === bottomRight) {
        handleWin(topRight);
        celldivs[2].classList.add('won');
        celldivs[5].classList.add('won');
        celldivs[8].classList.add('won');
      } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
        handleWin(topLeft);
        celldivs[0].classList.add('won');
        celldivs[4].classList.add('won');
        celldivs[8].classList.add('won');
      } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
        handleWin(topRight);
        celldivs[2].classList.add('won');
        celldivs[4].classList.add('won');
        celldivs[6].classList.add('won');
      } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
        gameIsLive = false;
        statusdiv.innerHTML = 'Game is tied!';
      } else {
        xIsNext = !xIsNext;
        if (xIsNext) {
          statusdiv.innerHTML = `${xsymbol} is next`;
        } else {
          statusdiv.innerHTML = `<span>${osymbol} is next</span>`;
        }
      }
   
}

//event handlers

const handlereset = (e) => {
    xIsNext = true;
    statusdiv.innerHTML = `${xsymbol} chance`;
    winner = null;
    for ( const celldiv of celldivs){
        celldiv.classList.remove('x');
        celldiv.classList.remove('o');
    }

}

const handleCellClick = (e) => {  
    const classList = e.target.classList;
    const location = classList[1];

    if(classList[2]=== 'x' || classList[2] === 'o'){
        return;
    }

    if (xIsNext){
       classList.add('x');
       checkGameStatus();
    //   statusdiv.innerHTML = 'Player 2 chance';
      
    }
    else {
       classList.add('o');
       checkGameStatus();
     //  statusdiv.innerHTML = 'Player 1 chance';

    }
}


//event listeners

resetdiv.addEventListener('click', handlereset);

for (const cell of celldivs) {
        cell.addEventListener('click', handleCellClick);
}
