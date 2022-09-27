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
let result = arrA

arrB.forEach((element, idx) => {
    const greatherIdx = result.findIndex((resultElement) => resultElement > element)
    if (greatherIdx !== -1) {
        result.splice(greatherIdx, 0, element)
    } else {
        result.push(element)
    }
})

return result   
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;