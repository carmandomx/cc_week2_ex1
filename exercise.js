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

  //Validation for input values.
  if (!arrA && !arrB) {
    //arrA and arrB need exist.
    return "Please create a array with numbers";
  }
  //
  if (!Array.isArray(arrA) || !Array.isArray(arrB)) {
    //arrA and arrB need be arrays.
    return "Please create a array";
  }

  //cycle for each value of arrA and arrB.
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      //We create a new array for push the values.
      const mergedArr = new Array();
      //While we can iterate over each array...
      while (i < arrA.length && j < arrB.length) {
        //for values ​​of i less than j, we insert it into mergedArr and continue evaluating.
        if (arrA[i] < arrB[j]) {
          mergedArr.push(arrA[i]);
          i++;
        } else {
          //for values ​​of j less than i, we insert it into mergedArr and continue evaluating.
          mergedArr.push(arrB[j]);
          j++;
        }
      }
      //Now we can iterate over arrA array... for i before ends arrA.
      while (i < arrA.length) {
        //Push new value and continue.
        mergedArr.push(arrA[i]);
        i++;
      }
      //Now we can iterate over arrB array... for j before ends arrB.
      while (j < arrB.length) {
        //Push new value and continue.
        mergedArr.push(arrB[j]);
        j++;
      }
      //For finish return the new array that have all sorted numbers.
      return mergedArr;
    }
  }

  if (arrA.length === 0 && arrB.length > 0) {
    //Now, for cases that arrA no includes values.
    return arrB;
  } else if (arrB.length === 0 && arrA.length > 0) {
    //or for cases that arrB no includes values.
    return arrA;
  } else {
    //warning for includes values.
    return "Create a array with values";
  }
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;
