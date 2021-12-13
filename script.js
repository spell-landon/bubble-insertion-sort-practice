const bubbleInput = document.querySelector('#input-sort-bubble');
const insertionInput = document.querySelector('#input-sort-insertion');

const bubblePara = document.querySelector('#bubble-p');
const insertionPara = document.querySelector('#insertion-p');

const bubbleBtn = document.querySelector('#bubbleBtn');
const insertionBtn = document.querySelector('#insertionBtn');

bubbleBtn.addEventListener('click', bubbleSort);
insertionBtn.addEventListener('click', sortByInsertion);

function bubbleSort(inputArr) {
  inputArr = bubbleInput.value;
  let inputSplit = inputArr.split('');

  let newArr = [];
  let swapHappened = false;
  for (let i = 0; i < inputSplit.length; i++) {
    swapHappened = false;
    for (let j = 0; j < inputSplit.length; j++) {
      if (inputSplit[j] > inputSplit[j + 1]) {
        let placeholder = inputSplit[j];
        inputSplit[j] = inputSplit[j + 1];
        inputSplit[j + 1] = placeholder;
      }
      swapHappened === true;
    }
  }
  newArr.push(inputSplit);
  bubblePara.textContent = newArr;
  return newArr;
}

function sortByInsertion(items) {
  items = insertionInput.value;
  let itemsSplit = items.split('');

  let newArr = [];
  for (let i = 0; i < itemsSplit.length; i++) {
    let z = i;
    while (z > 0 && itemsSplit[z] < itemsSplit[z - 1]) {
      let placeholder = itemsSplit[z];
      itemsSplit[z] = itemsSplit[z - 1];
      itemsSplit[z - 1] = placeholder;
      z--;
    }
  }
  newArr.push(itemsSplit);
  insertionPara.textContent = newArr;
  return newArr;
}
