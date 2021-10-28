let Game = function () {
  let Furry = require("./furry");
  let Coin = require("./coin");

  this.board = document.querySelectorAll("#board div");
  this.furry = new Furry();
  this.coin = new Coin();
  this.score = 0;
  let self = this;
  this.index = function (x, y) {
    return x + (y * 10);
  };
  this.hideVisibleFurry = function () {
    let pastFurry = document.querySelector(".furry");
    pastFurry.classList.remove("furry");
  };
  this.showFurry = function () {
    game.hideVisibleFurry();
    this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
  };
  this.showCoin = function () {
    this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
  };
  this.moveFurry = function () {

    if (this.furry.direction === "right") {
      this.furry.x = this.furry.x + 1;
    } else if (this.furry.direction === "left") {
      this.furry.x = this.furry.x - 1;
    } else if (this.furry.direction === "up") {
      this.furry.y = this.furry.y - 1;
    } else if (this.furry.direction === "down") {
      this.furry.y = this.furry.y + 1;
    }
    game.gameOver();
    game.showFurry();
    game.checkCoinCollision();
  };
  this.turnFurry = function (event) {
    switch (event.which) {
      case 37:
        this.furry.direction = "left";
        break;
      case 38:
        this.furry.direction = "up";
        break;
      case 39:
        this.furry.direction = "right";
        break;
      case 40:
        this.furry.direction = "down";
        break;
    }
    ;
  };
  this.checkCoinCollision = function () {
    if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
      let pastCoin = document.querySelector(".coin");
      pastCoin.classList.remove("coin");
      this.score++;
      document.getElementById("score").querySelector("div").querySelector("strong").innerText = this.score;
      this.coin = new Coin();
      game.showCoin();
    }
    ;
  };
  this.startGame = function () {
    this.idSetInterval = setInterval(function () {
      self.moveFurry();
    }, 250);
  };
  this.gameOver = function () {
    if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
      clearInterval(this.idSetInterval);
      game.hideVisibleFurry();
      let board = document.getElementById("board");
      board.parentElement.removeChild(board);
      let score = document.getElementById("score");
      score.parentElement.removeChild(score);
      let over = document.getElementById("over");
      over.classList.remove("invisible");
      over.querySelector("span:nth-child(2)").innerText = "Your score: " + this.score;
    }
    ;
  };
};
document.addEventListener("keydown", function (event) {
  game.turnFurry(event);
});

let game = new Game();
game.showFurry();
game.showCoin();
game.startGame();
module.exports = Game;