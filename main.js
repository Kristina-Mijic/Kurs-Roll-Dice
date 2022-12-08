let diceWrapper = document.getElementById('dice-wrapper');
let playerOne = document.getElementById('player-one');
let playerTwo = document.getElementById('plyer-two');
let rollDiceBtn = document.getElementById('roll-dice-btn');
let scoreLeft = document.getElementById('score-id-left');
let scoreRight = document.getElementById('score-id-right');
let myCanvasLeft = document.getElementById('canvas-id-left');
let myCanvasRight = document.getElementById('canvas-id-right');
let diceImgLeft = document.getElementById('dice-img-left');
let diceImgRight = document.getElementById('dice-img-right')
let winningTextPlayer1 = document.getElementById('player-1-winner');
let winningTextPlayer2 = document.getElementById('player-2-winner');
let newGametext = document.getElementById('new-game-text');
let infotext = document.getElementById('info-text');

let currentDiceSumLeft = 0;
let currentDiceSumRight = 0;
let winningScore = 10;

let rollLeftDice = () => {
  let myCanvas = document.getElementById('canvas-id-left');
  return rollDice(myCanvas);
}

let rollRightDice = () => {
  let myCanvas = document.getElementById('canvas-id-right');
  return rollDice(myCanvas);
}

let rollDice = (myCanvas) => {
  let ctx = myCanvas.getContext("2d");
  let broj = Math.floor(Math.random() * 6) + 1;
  let text = broj.toString();
  let img = document.getElementById(text);

  ctx.drawImage(img,0,0);

  return broj;
}


rollDiceBtn.addEventListener('click', () => {
  let broj1 = rollLeftDice();
  let broj2 = rollRightDice();

  if(broj1 > broj2) {
    currentDiceSumLeft = currentDiceSumLeft + 1;
    scoreLeft.innerHTML = "SCORE: " + currentDiceSumLeft;
    
    if(currentDiceSumLeft === winningScore) {
      winningTextPlayer1.style.display = "block";
      winningTextPlayer1.innerHTML = "WINNER !";
      disabledBtn();
      newGametext.style.display = "block";
      newGametext.innerHTML = "Please refresh the page, and start new game";
      infotext.style.display = "none";
    } 
  } else {
    currentDiceSumRight = currentDiceSumRight + 1;
    scoreRight.innerHTML = "SCORE: " + currentDiceSumRight;

    if(currentDiceSumRight === winningScore) {
      winningTextPlayer2.style.display = "block";
      winningTextPlayer2.innerHTML = "WINNER !";
      disabledBtn();
      newGametext.style.display = "block";
      newGametext.innerHTML = "Please refresh the page, and start new game";
      infotext.style.display = "none";
    };
  };
});


let disabledBtn = () => {
  rollDiceBtn.disabled = true;
}

