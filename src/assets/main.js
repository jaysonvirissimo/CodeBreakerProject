let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function generateCode(numberOfDigits) {
  numberOfDigits = numberOfDigits || 4;
  return Math.random().toString().slice(2, 2 + numberOfDigits);
}

function guess() {
    let input = document.getElementById('user-guess');

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
