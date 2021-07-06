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

  playerWinner: function () {
    if (this.row1[0] === 'X' && this.row1[1] === 'X' && this.row1[2] === 'X') {
      alert("player X won!");
    } else if (this.row2[0] === 'X' && this.row2[1] === 'X' && this.row2[2] === 'X') {
      alert("player X won!");
    } else if (this.row3[0] === 'X' && this.row3[1] === 'X' && this.row3[2] === 'X') {
      alert("player X won!");
    } else if (this.row1[0] === 'X' && this.row2[0] === 'X' && this.row3[0] === 'X') {
      alert("player X won!");
    } else if (this.row1[1] === 'X' && this.row2[1] === 'X' && this.row3[1] === 'X') {
      alert("player X won!");
    } else if (this.row1[2] === 'X' && this.row2[2] === 'X' && this.row3[2] === 'X') {
      alert("player X won!");
    } else if (this.row1[0] === 'X' && this.row2[1] === 'X' && this.row3[2] === 'X') {
      alert("player X won!");
    } else if (this.row1[2] === 'X' && this.row2[1] === 'X' && this.row3[0] === 'X') {
      alert("player X won!");
    }
    if (this.row1[0] === 'O' && this.row1[1] === 'O' && this.row1[2] === 'O') {
      alert("player O won!");
    } else if (this.row2[0] === 'O' && this.row2[1] === 'O' && this.row2[2] === 'O') {
      alert("player O won!");
    } else if (this.row3[0] === 'O' && this.row3[1] === 'O' && this.row3[2] === 'O') {
      alert("player O won!");
    } else if (this.row1[0] === 'O' && this.row2[0] === 'O' && this.row3[0] === 'O') {
      alert("player O won!");
    } else if (this.row1[1] === 'O' && this.row2[1] === 'O' && this.row3[1] === 'O') {
      alert("player O won!");
    } else if (this.row1[2] === 'O' && this.row2[2] === 'O' && this.row3[2] === 'O') {
      alert("player O won!");
    } else if (this.row1[0] === 'O' && this.row2[1] === 'O' && this.row3[2] === 'O') {
      alert("player O won!");
    } else if (this.row1[2] === 'O' && this.row2[1] === 'O' && this.row3[0] === 'O') {
      alert("player O won!");
    }
  }


}
