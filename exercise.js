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

  /* Concatenating the arrays */
  const newArr = arrA.concat(arrB);

  /* Insertion sort */
  /* for loop that goes through newArr starting from second element(newArr[1]) */
  for (let i = 1; i < newArr.length; i++) {
    /* for loop that goes through elements behind newArr[i] */
    for (let j = i - 1; j > -1; j--) {
      const el = newArr[j];
      const el2 = newArr[j + 1];

      /* if condition to check if el2 is smaller than el */
      if (el2 < el) {
        /* Swapping values */
        newArr[j + 1] = el;
        newArr[j] = el2;
      }
    }
  }

  /* return with sorted array */
  return newArr;

  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;
