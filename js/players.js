// first the logic of the game: players

// define an object where 2 players can have X or O
let playersArray = [];

const playerAlternate = function () {
  if (playersArray[playersArray.length - 1] === 'player2') {
    return 'player1';
  } else {
    return 'player2';
  }
}

const gameInfo = {
  player1: 'X',
  player2: 'O',

  row1: ['', '', ''],
  row2: ['', '', ''],
  row3: ['', '', ''],

  playerChoice: function (rowNum, indexNum) {
        playersArray.push(playerAlternate());
        return this["row" + rowNum][indexNum] = this[playerAlternate()];
  },

  playerWinner: function (player) {
    if (this.row1[0] === this[player] && this.row1[1] === this[player] && this.row1[2] === this[player]) {
      alert(`player ${this[player]} won!`);
    } else if (this.row2[0] === this[player] && this.row2[1] === this[player] && this.row2[2] === this[player]) {
      alert(`player ${this[player]} won!`);
    } else if (this.row3[0] === this[player] && this.row3[1] === this[player] && this.row3[2] === this[player]) {
      alert(`player ${this[player]} won!`);
    } else if (this.row1[0] === this[player] && this.row2[0] === this[player] && this.row3[0] === this[player]) {
      alert(`player ${this[player]} won!`);
    } else if (this.row1[1] === this[player] && this.row2[1] === this[player] && this.row3[1] === this[player]) {
      alert(`player ${this[player]} won!`);
    } else if (this.row1[2] === this[player] && this.row2[2] === this[player] && this.row3[2] === this[player]) {
      alert(`player ${this[player]} won!`);
    } else if (this.row1[0] === this[player] && this.row2[1] === this[player] && this.row3[2] === this[player]) {
      alert(`player ${this[player]} won!`);
    } else if (this.row1[2] === this[player] && this.row2[1] === this[player] && this.row3[0] === this[player]) {
      alert(`player ${this[player]} won!`);
    }
  }

}
