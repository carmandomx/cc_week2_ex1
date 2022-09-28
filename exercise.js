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

    for (let i = 0; i <= loopLength; i++) { // Loop to get through over the arrays

        /* Logical "&&" evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters.
        If all values are truthy, the value of the last operand is returned.*/
        // If element exist in bot arrays     
        if (arrA.length && arrB.length) {

            // The ".shift()" method removes the first item of an array.
            // Takes out the lowest number between arrA and arrB
            // Adds the lowest number in the "newArr" variable
            if (arrA[0] <= arrB[0]) { // Takes arrA number
                newArr.push(arrA.shift());
            }

            else { // Takes arrB number
                newArr.push(arrB.shift());
            }
        }

        // If numbers exist in A
        else if (arrA.length) {
            newArr.push(arrA.shift()); // Takes out the number from the array and adds it in the newArr variable
        }
        // If numbers exist in B
        else if (arrB.length) {
            newArr.push(arrB.shift()); // Takes out the number from the array and adds it in the newArr variable
        }

        //console.log("end of loop" +newArr);
    }
    return newArr;

    /* Only make changes below this comment */
}

//console.log(merged([1, 2, 4], [1, 3, 4]));


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;