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
    let arrC = arrA.concat(arrB); //Concat two arrays into one
    for (let i = 0; i < arrC.length; i++){//loop every number in the new array
        for (let j = i + 1; j < arrC.length; j++) {//loop every number one position away
            if (arrC[i] > arrC[j]){//check if the first number is greater than the second one
                let greatest = arrC[i]//we need to assign which one is the greatest number
                arrC[i] = arrC[j]//put the lower number at first
                arrC[j] = greatest//put the greatest number at last
                }
            }
        }
return arrC
    /* Only make changes below this comment */
}

arrA = [1, 2, 3 ,4 ,5, 6]
arrB = [3, 5, 7, 9]
console.log(merged(arrA, arrB))

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;