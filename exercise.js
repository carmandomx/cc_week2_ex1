/* *Instructions*
    You need to merge to sorted arrays containing only numbers

    For example you will receive the following arrays:
    arr1=[1,2,4]
    arr2=[1,3,4]

    and the expected output would be [1,1,2,3,4,4].

    Note: you cannot use the sort() array method and you cannot remove duplicates

*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const merged = (arrA, arrB) => {
  /* Only make changes below this comment */
  const mergedArray = []; //Creation of an array where the ordered array will be pushed
  let i = 0; //Creation of variables for the iterations
  let j = 0;
  
  //For loop that will go through the arrays ultil it reaches the end of one. 
  for (; i < arrA.length && j < arrB.length; ) { 
    if (arrA[i] < arrB[j]) { //If the value of i is less than that of j, save the value of i and advance one position in the array (i++).
      mergedArray.push(arrA[i]);
      i++;
    } else {
      mergedArray.push(arrB[j]); //On the other hand, if the value of j is less than that of i, it saves the value of j and advances one position in the array(j++)
      j++;
    }
  }
  //If this part is reached, it is because one of the two arrays was larger than the other.
  for (; i < arrA.length; i++) {  //This loop is in case arrayA is bigger than arrayB
    mergedArray.push(arrA[i]); //Pushes the remaining values to our ordered array.
  }

  for (; j < arrB.length; j++) { //This loop is the same as the previous one, except that it is in case that arrayB is bigger than arrayA
    mergedArray.push(arrB[j]); //Pushes the remaining values to our ordered array.
  }

  return mergedArray; //At the end of the cycles, the sorted array is returned
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;
