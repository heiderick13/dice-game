const playBtn = document.querySelector("#btn-play");
const imgs = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

function diceGame() {
  const title = document.querySelector("#title");
  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");

  let dice1 = throwDice(img1);
  let dice2 = throwDice(img2);

  if (dice1 > dice2) {
    resultMsg(title, "Player 1 WINS!");
  } else if (dice1 < dice2) {
    resultMsg(title, "Player 2 WINS!");
  } else {
    resultMsg(title, "Draw!");
  }
}

function throwDice(img) {
  let num = Math.ceil(Math.random() * 5);
  img.setAttribute("src", imgs[num]);
  return num;
}

function resultMsg(element, msg) {
  return (element.innerHTML = msg);
}

// event handlers
playBtn.addEventListener("click", diceGame);
