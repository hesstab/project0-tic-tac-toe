
const render = function () {
  $('table tr td').removeClass();
  $('table tr').removeClass();
}


$(document).ready(function () {
  render();

  $('.buttons').on('click', function () {
    const idName = $(this).attr('id');
    const rowNum = Number(idName.substr(3, 1));
    const indexNum = Number(idName.substr(10));
    const playerSelect = gameInfo.playerChoice(rowNum, indexNum);
    if (playerSelect === 'X') {
      $(this).addClass('piece-x');
    } else {
      $(this).addClass('piece-o');
    }
    $(this).prop('disabled', true);
    const buttonText = playersArray[playersArray.length - 2];
    const gameResult = gameInfo.playerWinner(buttonText);
    if(gameResult) {
      $('.display-header').html(gameResult);
      $('.buttons').prop('disabled', true);
      $('.reset-button').css('visibility', 'visible');
    }


  })

});
