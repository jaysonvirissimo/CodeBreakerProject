let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

function setHiddenFields() {
  answer.value = generateCode();
}

function generateCode(numberOfDigits) {
  numberOfDigits = numberOfDigits || 4;
  return Math.random().toString().slice(2, 2 + numberOfDigits);
}
