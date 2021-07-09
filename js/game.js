
const render = function () {
  $('table tr td').removeClass();
  $('table .buttons').prop('disabled', true);
}


$(document).ready(function () {
  render();

  $('.head-x-button').on('click', function () {
    playersArray.push('player1');
    $(this).prop('disabled', true);
    $('.display-header').html('&#9758; X turn &#9756;');
    $('.head-o-button').prop('disabled', false);
    $('table .buttons').prop('disabled', false);
  })

  $('.head-o-button').on('click', function () {
    playersArray.push('player2');
    $(this).prop('disabled', true);
    $('.display-header').html('&#9758; O turn &#9756;');
    $('.head-x-button').prop('disabled', false);
    $('table .buttons').prop('disabled', false);
  })

  $('.buttons').on('click', function () {
    $('.head-x-button').prop('disabled', true);
    $('.head-o-button').prop('disabled', true);
    const $idName = $(this).attr('id');
    const rowNum = Number($idName.substr(3, 1));
    const indexNum = Number($idName.substr(10));
    const playerSelect = gameInfo.playerChoice(rowNum, indexNum);
    if (playerSelect === 'X') {
      $(this).addClass('piece-x');
      $('.display-header').html('&#9758; O turn &#9756;');
    } else {
      $(this).addClass('piece-o');
      $('.display-header').html('&#9758; X turn &#9756;');
    }
    $(this).prop('disabled', true);
    const buttonText = playersArray[playersArray.length - 2];
    const gameResult = gameInfo.playerWinner(buttonText);
    if(gameResult) {
      $('.display-header').html(gameResult);
      $('.header-display h3').addClass('animate__animated animate__flash')
      $('.buttons').prop('disabled', true);
      $('.head-x-button').prop('disabled', true);
      $('.head-o-button').prop('disabled', true);
      $('.reset-button').css('visibility', 'visible');
    }


  })

});
