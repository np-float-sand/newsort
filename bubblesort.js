function bubbleSort(array) {
  // go through array
  
  let didflip = true;
  let myarray = array.slice() 
  console.log(array,  myarray);
  let outerCounter = 0
  
    console.log("i", i, "array", myarray);
    while (didflip) {
      
      for (j = 0; j < myarray.length - outerCounter; j++) {
        //  make pairwise comparisons
        if (myarray[j] < myarray[j - 1]) {
          didflip = true;
          arrj = myarray[j];
          myarray[j] = myarray[j - 1];
          myarray[j - 1] = arrj;
        }
      }
      outerCounter ++
  }
  return myarray;

}
