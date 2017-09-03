let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function digitsMatch(first, second) {
  if (first === second) {
    return true;
  } else {
    return false;
  }
}

function generateCode() {
  let numberOfDigits = 4;
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
  let userGuess = document.getElementById('user-guess');
  if (answer.value == '' || attempt.value == '') { setHiddenFields(); }
  if (!validateInput(userGuess.value)) { return false; }

  attempt.value++;
  let result = getResults(userGuess.value);

  if (result) {
    setMessage('You Win! :)');
    showAnswer(true);
    showReplay();
  } else if (attempt.value >= 10) {
    setMessage('You Lose! :(');
    showAnswer(false);
    showReplay();
  } else {
    setMessage('Incorrect, try again.');
  }
}

function setHiddenFields() {
  answer.value = generateCode();
  attempt.value = 0;
}

function setMessage(newMessage) {
  document.getElementById('message').innerHTML = newMessage;
}

function showAnswer(won) {
  let code = document.getElementById('code');
  let newClass = won ? ' success' : ' failure';
  code.innerHTML = answer.value;
  code.className = newClass;
}

function showReplay() {
  document.getElementById('guessing-div').style.display = 'none';
  document.getElementById('replay-div').style.display = 'block';
}

function validateInput(inputToValidate) {
  if (inputToValidate.length === 4) { return true; }
  setMessage('Guesses must be exactly 4 characters long.');
  return false;
}
