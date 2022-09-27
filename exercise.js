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
  //Create a new const for union both array
  const sortedArr = [...arrA, ...arrB];

  //Create two for loops for iterate the array with two pointers
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length; j++) {
      //Make the condition for when we want the swap is executed
      if (sortedArr[i] < sortedArr[j]) {
        //Create a new variable for help us to do the swap positions and do the swap
        let temp = sortedArr[i];
        sortedArr[i] = sortedArr[j];
        sortedArr[j] = temp;
      }
    }
  }
  return sortedArr;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;
