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

  if (!arrA && !arrB) {
    return "Please create a array with numbers";
  }
  if (!Array.isArray(arrA) || !Array.isArray(arrB)) {
    return "Please create a array";
  }

  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      const mergedArr = new Array();
      while (i < arrA.length && j < arrB.length) {
        if (arrA[i] < arrB[j]) {
          mergedArr.push(arrA[i]);
          i++;
        } else {
          mergedArr.push(arrB[j]);
          j++;
        }
      }
      while (i < arrA.length) {
        mergedArr.push(arrA[i]);
        i++;
      }
      while (j < arrB.length) {
        mergedArr.push(arrB[j]);
        j++;
      }
      return mergedArr;
    }
  }

  if (arrA.length === 0 && arrB.length >= 0) {
    return arrB;
  } else {
    return arrA;
  }
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;
