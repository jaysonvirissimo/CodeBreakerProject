let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function digitsMatch(first, second) {
  if (first === second) {
    return true;
  } else {
    return false;
  }
}

function generateCode(numberOfDigits) {
  numberOfDigits = numberOfDigits || 4;
  return Math.random().toString().slice(2, 2 + numberOfDigits);
}

function getResults(input) {
  let answer = document.getElementById('answer').value;
  let results = document.getElementById('results');
  let resultElement = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';

  for (let i = 0; i < 4; i++) {
    let guessDigit = input[i];
    let answerDigit = answer[i];

    if (guessDigit == answerDigit) {
      resultElement += '<span class="glyphicon glyphicon-ok"></span>';
    } else if (answer.includes(guessDigit)) {
      resultElement += '<span class="glyphicon glyphicon-transfer"></span>';
    } else {
      resultElement += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }

  resultElement += '</div>';
  results.innerHTML = resultElement;
  return digitsMatch(input, answer);
}

function guess() {
    let input = document.getElementById('user-guess');

    if (validateInput(input.value)) {
      attempt.value++;
    } else {
      return false;
    }

    if (answer.value == '' || attempt.value == '') {
      setHiddenFields();
    }
}

function setHiddenFields() {
  answer.value = generateCode();
  attempt.value = 0;
}

function setMessage(message) {
  let label = document.getElementById('message');
  label.innerHTML = message;
}

function validateInput(input) {
  if (input.length == 4) {
    return true;
  } else {
    setMessage('Guesses must be exactly 4 characters long.');
    return false;
  }
}
