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

    let x = 0; // Variable for longer length between arrays.
    const newArr = []; //New array to add the elements and return at the end of the array.

    if (arrA.length > arrB.length) { //Condition to know which array has the longest length.
        x = arrA.length;
    } else {
        x = arrB.length;
    }

    for (let index = 0; index < x; index++) { //Loop to loop through the arrays up to the longest one.
        if (arrA[index] != undefined) {//Condition to know if the element of this array exists.
            newArr.push(arrA[index]); //I add the element of the first array to my new array.
        }
        if (arrB[index] != undefined) {
            newArr.push(arrB[index]);//I add the element of the first array to my new array.
        }
    }

    for (let i = 0; i < newArr.length; i++) { //Ordering the new array evaluating a position with the following.
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[i] > newArr[j]) { //Condition to find out if the element in that position is larger than the one in that position.
                temp = newArr[i]; //I store the value in a temporary variable.
                newArr[i] = newArr[j]; //I store the value in a temporary variable.
                newArr[j] = temp; //I added the previous value to the position of the following value.
            }
        }
    }
    
    return newArr; ////Return the new array.
    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;