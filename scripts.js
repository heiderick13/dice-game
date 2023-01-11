class DiceGame {
  constructor() {
    this.imgs = [
      "images/dice1.png",
      "images/dice2.png",
      "images/dice3.png",
      "images/dice4.png",
      "images/dice5.png",
      "images/dice6.png",
    ];
  }

  play() {
    let title = document.querySelector("#title");
    let img1 = document.querySelector(".img1");
    let img2 = document.querySelector(".img2");

    let dice1 = this.throwDice(img1);
    let dice2 = this.throwDice(img2);

    if (dice1 > dice2) {
      this.resultMsg(title, "Player 1 WINS!");
    } else if (dice1 < dice2) {
      this.resultMsg(title, "Player 2 WINS!");
    } else {
      this.resultMsg(title, "Draw!");
    }
  }

  throwDice(img) {
    let num = Math.ceil(Math.random() * 5);
    img.setAttribute("src", this.imgs[num]);
    return num;
  }

  resultMsg(element, msg) {
    return (element.innerHTML = msg);
  }
}

// instantiate new class
let game = new DiceGame();

const playBtn = document.querySelector("#btn-play");

// event handlers
playBtn.addEventListener("click", () => {
  game.play();
});
