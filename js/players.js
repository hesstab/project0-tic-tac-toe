// logic of the game

let playersArray = ['player1'];

const playerAlternate = function () {
  if (playersArray[playersArray.length - 1] === 'player2') {
    return 'player1';
  } else {
    return 'player2';
  }
}

const addStyleToWinnner = function (nodeList) { // This function loops through an array of cells (node list) and styles them
  const nodeListArray = Array.from(nodeList)
  nodeListArray.map(function(element) {
    element.style.backgroundColor = '#948ee8';
  })
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
      const nodeList = document.querySelectorAll('#c1, #c2, #c3');
      addStyleToWinnner(nodeList);
      result = `${this[player]} is the winner!`;
      return result;
    } else if (this.row2[0] === this[player] && this.row2[1] === this[player] && this.row2[2] === this[player]) {
      const nodeList = document.querySelectorAll('#c4, #c5, #c6');
      addStyleToWinnner(nodeList);
      result = `${this[player]} is the winner!`;
      return result;
    } else if (this.row3[0] === this[player] && this.row3[1] === this[player] && this.row3[2] === this[player]) {
      const nodeList = document.querySelectorAll('#c7, #c8, #c9');
      addStyleToWinnner(nodeList);
      result = `${this[player]} is the winner!`;
      return result;
    } else if (this.row1[0] === this[player] && this.row2[0] === this[player] && this.row3[0] === this[player]) {
      const nodeList = document.querySelectorAll('#c1, #c4, #c7');
      addStyleToWinnner(nodeList);
      result = `${this[player]} is the winner!`;
      return result;
    } else if (this.row1[1] === this[player] && this.row2[1] === this[player] && this.row3[1] === this[player]) {
      const nodeList = document.querySelectorAll('#c2, #c5, #c8');
      addStyleToWinnner(nodeList);
      result = `${this[player]} is the winner!`;
      return result;
    } else if (this.row1[2] === this[player] && this.row2[2] === this[player] && this.row3[2] === this[player]) {
      const nodeList = document.querySelectorAll('#c3, #c6, #c9');
      addStyleToWinnner(nodeList);
      result = `${this[player]} is the winner!`;
      return result;
    } else if (this.row1[0] === this[player] && this.row2[1] === this[player] && this.row3[2] === this[player]) {
      const nodeList = document.querySelectorAll('#c1, #c5, #c9');
      addStyleToWinnner(nodeList);
      result = `${this[player]} is the winner!`;
      return result;
    } else if (this.row1[2] === this[player] && this.row2[1] === this[player] && this.row3[0] === this[player]) {
      const nodeList = document.querySelectorAll('#c3, #c5, #c7');
      addStyleToWinnner(nodeList);
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
