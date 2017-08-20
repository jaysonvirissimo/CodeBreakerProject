let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function generateCode(numberOfDigits) {
  numberOfDigits = numberOfDigits || 4;
  return Math.random().toString().slice(2, 2 + numberOfDigits);
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
