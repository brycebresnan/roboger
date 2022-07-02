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