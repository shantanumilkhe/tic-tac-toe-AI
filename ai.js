

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
    const a11 = celldivs[0].classList[2];
    const a12 = celldivs[1].classList[2];
    const a13 = celldivs[2].classList[2];
    const a21 = celldivs[3].classList[2];
    const a22 = celldivs[4].classList[2];
    const a23 = celldivs[5].classList[2];
    const a31 = celldivs[6].classList[2];
    const a32 = celldivs[7].classList[2];
    const a33 = celldivs[8].classList[2];

    //check winner RR
    if (a11 && a11 === a12 && a11 === a13) {
        handleWin(a11);
        celldivs[0].classList.add('won');
        celldivs[1].classList.add('won');
        celldivs[2].classList.add('won');
      } else if (a21 && a21 === a22 && a21 === a23) {
        handleWin(a21);
        celldivs[3].classList.add('won');
        celldivs[4].classList.add('won');
        celldivs[5].classList.add('won');
      } else if (a31 && a31 === a32 && a31 === a33) {
        handleWin(a31);
        celldivs[6].classList.add('won');
        celldivs[7].classList.add('won');
        celldivs[8].classList.add('won');
      } else if (a11 && a11 === a21 && a11 === a31) {
        handleWin(a11);
        celldivs[0].classList.add('won');
        celldivs[3].classList.add('won');
        celldivs[6].classList.add('won');
      } else if (a12 && a12 === a22 && a12 === a32) {
        handleWin(a12);
        celldivs[1].classList.add('won');
        celldivs[4].classList.add('won');
        celldivs[7].classList.add('won');
      } else if (a13 && a13 === a23 && a13 === a33) {
        handleWin(a13);
        celldivs[2].classList.add('won');
        celldivs[5].classList.add('won');
        celldivs[8].classList.add('won');
      } else if (a11 && a11 === a22 && a11 === a33) {
        handleWin(a11);
        celldivs[0].classList.add('won');
        celldivs[4].classList.add('won');
        celldivs[8].classList.add('won');
      } else if (a13 && a13 === a22 && a13 === a31) {
        handleWin(a13);
        celldivs[2].classList.add('won');
        celldivs[4].classList.add('won');
        celldivs[6].classList.add('won');
      } else if (a11 && a12 && a13 && a21 && a22 && a23 && a31 && a32 && a33) {
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
        celldiv.classList.remove('won');
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
