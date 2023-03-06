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
    let newArr = [];
    let count = 0;
    let concatArrs = arrA.concat(arrB);
    while (newArr.length < concatArrs.length) {
        for (let index = 0; index < concatArrs.length; index++) {
            if (count === concatArrs[index]) {
                newArr.push(concatArrs[index]);
            }
        }
        count++
    }
    return newArr
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;