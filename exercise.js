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

    // create 1 array mixing the 2 original arrays
    let arrC = arrA.concat(arrB);
    let i, j, aux;
    
    // Bubble sort to order array
    for(i=0; i < arrC.length-1; i++) {
        for(j=0; j < arrC.length-1; j++) {
            if(arrC[j] > arrC[j+1]) {
                aux = arrC[j];
                arrC[j] = arrC[j+1];
                arrC[j+1] = aux;
            }
        }
    }
    
    /* Only make changes below this comment */
    // Return new array
    return arrC; 
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;