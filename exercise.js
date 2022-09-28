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
    const arrC = arrA.concat(arrB);//we start by creating an array with the two past arrays
for (let i = 0; i < arrC.length; i++) { //create a for loop inside a for loop   
    for (let j = 0; j < arrC.length; j++) {
        if (arrC[j] > arrC[j + 1]) {//we use a bubble sort and arrange everything from the smallest number to the biggest number 
            let aux = arrC[j];
            arrC[j] = arrC[j + 1];
            arrC[j + 1] = aux;
        } 
    }
}

    return arrC;// we return the array rearranged
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;