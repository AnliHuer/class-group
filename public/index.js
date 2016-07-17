function generateRandomNumber() {
  var newArray = [];
  for (var i = 0; i < 62; i++) {
    newArray[i] = i;
  }

  newArray.sort(function () {
    return 0.5 - Math.random()
  })

  return newArray.join();
}


$(function () {
  var button = $('.divide-class');
  var names = $('.name');

  button.on('click', function () {
    var randomNumbers = generateRandomNumber().split(',');

    for (var i = 0; i < 24; i++) {
      $('#' + randomNumbers[i]).appendTo('.meeting-room');
    }

  });
});

