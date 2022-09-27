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
// Create variable and initialize it to the first received array
// This variable will be actualized 
let result = arrA
// Evaluate second received array
arrB.forEach((element, idx) => {
    // Find a greater element in the "result" array
    const greatherIdx = result.findIndex((resultElement) => 
    resultElement > element);
    // if finds something different to "-1", then insert the element of second array in the position  "greaterIdx" in the "result" array without deleting any element
    if (greatherIdx !== -1) {
        result.splice(greatherIdx, 0, element)
    } else {
        // if doesn't find a greater element, then just add the element to the "result" array
        result.push(element)
    }
})
// return the sorted array
return result   
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;