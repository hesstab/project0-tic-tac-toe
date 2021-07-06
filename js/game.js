

$(document).ready(function () {

  // when click the button it changes the button text to X or O
  const row1Index0Button = $('#row1-index0').text();

  $('button').on('click', function () {
    const idName = $('button').attr('id');
    const rowNum = Number(idName.substr(3, 1));
    const indexNum = Number(idName.substr(10));
    console.log(rowNum);
    console.log(indexNum);
    console.log($('this').text());
    const playerSelect = gameInfo.playerChoice(rowNum, indexNum);
    $('#id').text(playerSelect);
    $('#row1-index0').prop('disabled', true);
    gameInfo.playerWinner();
  })
  // $('#row1-index0').on('click', function () {
  //   const idName = $('button').attr('id');
  //   const rowNum = Number(idName.substr(3, 1));
  //   const indexNum = Number(idName.substr(10));
  //   const playerSelect = gameInfo.playerChoice(1, 0);
  //   $('#row1-index0').text(playerSelect);
  //   $('#row1-index0').prop('disabled', true);
  //   gameInfo.playerWinner();
  // })
  $('#row1-index1').on('click', function () {
    const playerSelect = gameInfo.playerChoice(1, 1);
    $('#row1-index1').text(playerSelect);
    $('#row1-index1').prop('disabled', true);
    gameInfo.playerWinner();
  })
  $('#row1-index2').on('click', function () {
    const playerSelect = gameInfo.playerChoice(1, 2);
    $('#row1-index2').text(playerSelect);
    $('#row1-index2').prop('disabled', true);
    gameInfo.playerWinner();
  })

  $('#row2-index0').on('click', function () {
    const playerSelect = gameInfo.playerChoice(2, 0);
    $('#row2-index0').text(playerSelect);
    $('#row2-index0').prop('disabled', true);
    gameInfo.playerWinner();
  })
  $('#row2-index1').on('click', function () {
    const playerSelect = gameInfo.playerChoice(2, 1);
    $('#row2-index1').text(playerSelect);
    $('#row2-index1').prop('disabled', true);
    gameInfo.playerWinner();
  })
  $('#row2-index2').on('click', function () {
    const playerSelect = gameInfo.playerChoice(2, 2);
    $('#row2-index2').text(playerSelect);
    $('#row2-index2').prop('disabled', true);
    gameInfo.playerWinner();
  })

  $('#row3-index0').on('click', function () {
    const playerSelect = gameInfo.playerChoice(3, 0);
    $('#row3-index0').text(playerSelect);
    $('#row3-index0').prop('disabled', true);
    gameInfo.playerWinner();
  })
  $('#row3-index1').on('click', function () {
    const playerSelect = gameInfo.playerChoice(3, 1);
    $('#row3-index1').text(playerSelect);
    $('#row3-index1').prop('disabled', true);
    gameInfo.playerWinner();
  })
  $('#row3-index2').on('click', function () {
    const playerSelect = gameInfo.playerChoice(3, 2);
    $('#row3-index2').text(playerSelect);
    $('#row3-index2').prop('disabled', true);
    gameInfo.playerWinner();
  })


});
