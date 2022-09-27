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
    
    // Creates an array to merge both arrays.
    let arrAB = [];

    // If array A is not empty, add the array to the merged array.
    if (arrA !== []) {
        arrA.forEach(element => {
            arrAB.splice(0,0,element);    
        });
    }

    // If array B is not empty, add the array to the merged array.
    if (arrB !== []) {
        arrB.forEach(element => {
            arrAB.splice(arrAB.length,0,element);
        });
    }

    let temp = 0;                                               // Temporable variable to store a number.
    
    // Sort merged array.
    for (let index = 0; index < arrAB.length; index++) {
        for (let index2 = 0; index2 < arrAB.length; index2++) {
            if (arrAB[index] <= arrAB[index2]){                 // If first element is lower or equal than second element, trade positions. 
                temp = arrAB[index];
                arrAB[index] = arrAB[index2];
                arrAB[index2] = temp;
            }
            
        }
    }
    return arrAB;
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;