function numberListMaker(number) {
  const numberList = [];
  if (number >= 0) {
    for (i=0;i<=number;i++){
      numberList.push(i);
    }
    return numberList;
  }
  else {
    for (i=0;i>=number;i--){
      numberList.push(i);
    }
  }
    return numberList;
}

function addBeepBoop(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index].toString().includes("3")){
      array.splice(index, 1, "Won't you be my neighbor?" );
    }
    else if (array[index].toString().includes("2")){
      array.splice(index, 1, "Boop!" );
    }
    else if (array[index].toString().includes("1")){
      array.splice(index, 1, "Beep!" );
    }
  }
  return array;
}

function roboger(event) {
  event.preventDefault();
  
  let userInput = gatherUserInput();
  
  if (!isNaN(userInput)) {
    let numberList = numberListMaker(userInput);
    let beepBoopArray = addBeepBoop(numberList);
    displayResults(beepBoopArray);
  }
  else {
    console.log("firing!");
    errorMessage();
  }
}

//UI Logic
function gatherUserInput() {
  let userInput = parseInt(document.querySelector("input[name='number']").value);
  return userInput;
}

function errorMessage() {
  document.getElementById("results").innerText = "Mr. Rodgers might tollerate make-believe numbers, but this robot won't! Please input any single whole intiger.";
}

function displayResults(array) {
  let finishedArray = array.join(", ");
  document.getElementById("results").innerText = finishedArray;
}

window.addEventListener("load", function(){
  const form = document.getElementById("userNumber");
  form.addEventListener("submit", roboger);
})