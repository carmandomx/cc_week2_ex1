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
    const ArraC = arrA.concat(arrB); // initial

    // bubble sort
    for (let i = 0; i < arrC.length; i++) {
        for (let j = i + 1; j < arrC.length; j++) {
            if (arrC[i] > arrC[j]) {
                [arrC[i], arrC[j]] = [arrC[j], arrC[i]];
            }
        }
    }

   return arrC;

    /* Only make changes below this comment */


    /** DO NOT CHANGE THE LINE BELOW **/
    module.exports.merged = merged;