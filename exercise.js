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

  // Merge both arrays
  let bothArrays = [...arrA, ...arrB];

  // Manually sort the array
  for (let i = 0; i < bothArrays.length; i++) {
    if (bothArrays[i] > bothArrays[i + 1]) {
      // Swap the values using a temporary variable
      const temp = bothArrays[i];
      bothArrays[i] = bothArrays[i + 1];
      bothArrays[i + 1] = temp;
      // Reset value of i
      i = 0;
    }
  }

  return bothArrays;

  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;
