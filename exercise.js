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
    for (var i = 0; i < b.length; i++) {
        arrA.push(arrB[i]);
    }
    //console.log(arrA);
    for (i = 0; i < arrA.length; i++) {
        for (j = i + 1; j < arrA.length; j++) {
            if (arrA[i] > arrA[j]) {
                temp = arrA[i];
                arrA[i] = arrA[j];
                arrA[j] = temp;
            }
        }
    }
    return arrA;
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;