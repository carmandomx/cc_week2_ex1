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
    const mergArr = arrA.concat(arrB);                        //Merge the two arrays into one array using Concat()
    for(let i = 0; i < mergArr.length; i++) {           //Create a loop to iterate every number in the merged array
        for (let j = i + 1; j < mergArr.length; j++) {  //Create another loop to iterate every number but one in advance to the first loop
            if (mergArr[i] > mergArr[j]) {              //Check if the first number is greater than the number in advance
                let tempNum = mergArr[i];               //Create a temporal number variable to store the greater number temporarily
                mergArr[i] = mergArr[j];                //Replace the greater number with the lower number to put it first in the array
                mergArr[j] = tempNum;                   //Retrieve the greater number from the temporal variable and store it in the index where the lower number was
            }                                           
        }                                               //If the first number is lower than the number in advance, do nothing, to sort the array from smallest to largest
    }
    return mergArr;
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;