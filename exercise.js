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


    //We create a unify array to test the elements later
    let arrC = arrA.concat(arrB);

    //Nested loop to compare each elemet
    for (let i = 0; i < arrC.length; i++) {
        for (let j = 0; j < arrC.length; j++) {
            //bubble sort
            //This 'if' is to check if the iteration happening is greater than the next one, and if the condition is true then swap them
            //we go checking each element to compare them and swap
            if (arrC[j] > arrC[j + 1]) {
                let arr3 = arrC[j]
                arrC[j] = arrC[j + 1]
                arrC[j + 1] = arr3
            }
        }
    }

    return arrC;





    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;