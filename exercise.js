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
  const mergedArray = [];
  let i = 0;
  let j = 0;

  for (; i < arrA.length && j < arrB.length; ) {
    if (arrA[i] < arrB[j]) {
      mergedArray.push(arrA[i]);
      i++;
    } else {
      mergedArray.push(arrB[j]);
      j++;
    }
  }

  for (; i < arrA.length; i++) {
    mergedArray.push(arrA[i]);
  }

  for (; j < arrB.length; j++) {
    mergedArray.push(arrB[j]);
  }

  return mergedArray;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;
