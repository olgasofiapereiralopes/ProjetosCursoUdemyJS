const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput()

function add() {
  const enteredNumber = parseInt(usrInput.value);
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription );
}

addBtn.addEventListener('click', add);


