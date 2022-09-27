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
  /* Only make changes below this comment */
};

console.log(merged([1, 2, 4], [1, 3, 4])); //[1, 1, 2, 3, 4, 4];
console.log(merged([2, 3, 4], [3, 5, 7])); //[2, 3, 3, 4, 5, 7];
/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;
