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
    for (let i = 0; i < arrB.length; i++) {

        arrA.push(arrB[i])
        
    }
    /* Only make changes below this comment */

    for ( let i = 0; i < arrA.length; i++){

        for ( let j = i -1; j > - 1; j--){

            if (arrA[j + 1] < arrA[j]){

                [arrA[j + 1], arrA[j]] = [arrA[j], arrA[j + 1]]

            }

        }

    }

    return arrA
}

console.log(merged([1,2,4],[1,3,4]));




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;