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

    //new const to concat A & B arrays
    const arrC = arrA.concat(arrB);

    //For loop to compair pair numbers ordering by size
   for (let i = 0; i < arrC.length; i++) {
         for (let j = i+1; j < arrC.length; j++) {
    // if the first element is greater than the next 
           if (arrC[i] > arrC[j]) {
    // the last part is swap the elements
               [arrC[i],arrC[j]]=[arrC[j],arrC[i]];
           }
       }
   }
   return arrC; // finally we return the resulting ordered array that was oiginally merged

    /* Only make changes below this comment */
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;