

$(document).ready(function () {

  $('button').on('click', function () {
    const idName = $(this).attr('id');
    const rowNum = Number(idName.substr(3, 1));
    const indexNum = Number(idName.substr(10));
    const playerSelect = gameInfo.playerChoice(rowNum, indexNum);
    $(this).html(playerSelect);
    $(this).prop('disabled', true);
    gameInfo.playerWinner();
  })

});
