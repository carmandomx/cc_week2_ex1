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

    let loopLength = arrA.length + arrB.length; // Total lenght of the array
    let newArr = []; // Result array
    //let temporary;

    for (let i = 0; i <= loopLength; i++) { // Loop to get through over the array

        if (arrA.length && arrB.length) { // Any lenght

            if (arrA[0] <= arrB[0]) { // Compares positions
                newArr = [...newArr,  newArr[i] = arrA.shift()]; // Do the shift positions
            }

            else {
                newArr = [...newArr, newArr[i] = arrB.shift()];
            }
        }
        
        else if (arrA.length) {
            newArr = [...newArr, newArr[i] = arrA.shift()];
        }

        else if (arrB.length) {
            newArr = [...newArr, newArr[i] = arrB.shift()];
        }
    }
    return newArr;

    /* Only make changes below this comment */
}

//console.log(merged([1, 2, 4], [1, 3, 4]));


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;