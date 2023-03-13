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
  let suma = [];
  let compara1 = 0;
  let compara2 = 0;

  //We take the first value of each array
  while (compara1 < arrA.length && compara2 < arrB.length) {
    //We compare if arrA position is minor than arrB position
    if (arrA[compara1] < arrB[compara2]) {
      //if arrA is minor we push to suma and increment de position of arrA 
        suma.push(arrA[compara1]);
      compara1++;
    } else {
      //if arrB is minor we push to soma and increment de position of arrB
        suma.push(arrB[compara2]);
      compara2++;
    }
  }
  //we add arrA to suma
  while (compara1 < arrA.length) {
    suma.push(arrA[compara1]);
    compara1++;
  }
  //we add arrB to suma
  while (compara2 < arrB.length) {
    suma.push(arrB[compara2]);
    compara2++;
  }
 

  return suma;
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;
