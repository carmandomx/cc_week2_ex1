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
    let result=[]; //created an empty array
    while (arrA.length && arrB.length) { //the arrays have to have some length, no empty arrays
        const next = (arrA[0] < arrB[0]) ? arrA.shift() : arrB.shift(); // to sort the final array we compare both arrays while they have the same length, when they don't the go to the if statement, if the value is lower in either one of the arrays that value will be stored in the next variable
        result.push(next); // we will push one by one the compared lowest number to the resulting array which will give us the result
    }

    if (arrA.length) {
        result = result.concat(arrA); 
    } else if (arrB.length) {
        result = result.concat(arrB);
    }//this condition will help us when the comparison for the while loop is out of data (if one array is empty) then that array with just one value left will be the largest integer so we just concat it to the result
    return result;
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;