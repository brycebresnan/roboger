function numberListMaker(number) {
  const numberList = [];
  if (typeof(number) === typeof(1)) {
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
  else {
    return 0;
  }
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


//UI Logic
function gatherUserInput() {
  
}

function displayResults() {

}

window.addEventListener("load", function(){
  
})