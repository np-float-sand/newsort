function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const lenArray = Math.floor(wholeArray.length / 2); //3

  const firstHalf = wholeArray.slice(0, lenArray); // 0, 1, 2
  const secondHalf = wholeArray.slice(lenArray);

  //console.log("first", firstHalf);
  //console.log("second", secondHalf);
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
  let newArr = [];
  console.log("firsthalf 1", firstHalf);

  let longArray = firstHalf.length > secondHalf.length ? firstHalf : secondHalf;
  //console.log('firsthalf 2', firstHalf )
  let shortArray =
    firstHalf.length > secondHalf.length ? secondHalf : firstHalf;
//   console.log("firsthalf 3", firstHalf);

//   console.log("short", shortArray);
//   console.log("long", longArray);
//   console.log("firsthalf", firstHalf);

  let fl = 0;
  let fs = 0;



// while ((fl < longArray.length - 1) || (fs < shortArray.length-1)) {
 for (let icomp=0; icomp< shortArray.length +longArray.length; icomp++)

    {
        if (fs>shortArray.length-1 || fl> longArray.length-1) {
            break;
        } else {
        if (shortArray[fs]<longArray[fl]) {
            newArr.push(shortArray[fs])
            fs +=1 
        } else {
            newArr.push(longArray[fl])
            fl +=1
        }
    }

    }
 
    console.log(longArray, fl, longArray.slice(fl) )
    console.log(shortArray, fs, shortArray.slice(fs))

  newArr = newArr.concat(longArray.slice(fl)).concat(shortArray.slice(fs));


  return newArr;




}


function mergeSort(array) {

  if (array.length===1) {
      return array;
  } else {
      const  halves = split(array)
      const newArray = merge(mergeSort(halves[0]), mergeSort(halves[1]));
      return newArray
  }
  
  }
