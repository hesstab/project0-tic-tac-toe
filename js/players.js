// first the logic of the game

let playersArray = ['player1'];

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
    let result = '';
    if (this.row1[0] === this[player] && this.row1[1] === this[player] && this.row1[2] === this[player]) {
      result = `${this[player]} is the winner!`;
      return result;
    } else if (this.row2[0] === this[player] && this.row2[1] === this[player] && this.row2[2] === this[player]) {
      result = `${this[player]} is the winner!`;
      return result;
    } else if (this.row3[0] === this[player] && this.row3[1] === this[player] && this.row3[2] === this[player]) {
      result = `${this[player]} is the winner!`;
      return result;
    } else if (this.row1[0] === this[player] && this.row2[0] === this[player] && this.row3[0] === this[player]) {
      result = `${this[player]} is the winner!`;
      return result;
    } else if (this.row1[1] === this[player] && this.row2[1] === this[player] && this.row3[1] === this[player]) {
      result = `${this[player]} is the winner!`;
      return result;
    } else if (this.row1[2] === this[player] && this.row2[2] === this[player] && this.row3[2] === this[player]) {
      result = `${this[player]} is the winner!`;
      return result;
    } else if (this.row1[0] === this[player] && this.row2[1] === this[player] && this.row3[2] === this[player]) {
      result = `${this[player]} is the winner!`;
      return result;
    } else if (this.row1[2] === this[player] && this.row2[1] === this[player] && this.row3[0] === this[player]) {
      result = `${this[player]} is the winner!`;
      return result;
    } else {
        if (this.row1.join('').length === 3 && this.row2.join('').length === 3 && this.row3.join('').length === 3) {
          result = `It's a Draw!`
          return result;
        }
      }
    }

}
