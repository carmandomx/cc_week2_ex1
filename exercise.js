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

    // this for loop is to take the numbers from the second array and merged into arrA
    let newArr = [];
    for (let i = 0; i < arrB.length; i++) {
        newArr.push(arrB[i])};
    
        for ( let j = 0; j < arrA.length; j++){

        newArr.push(arrA[j])
    };
    console.log(newArr);
    /* Only make changes below this comment */
    
    for ( let i = 0; i < newArr.length; i++){

        for ( let j = i -1; j > - 1; j--){
            //This if is to comapare the numbers using an ascending order
            if (newArr[j + 1] < newArr[j]){
                // This is the swapper
                [newArr[j + 1], newArr[j]] = [newArr[j], newArr[j + 1]]

            }

        }

    }

    return newArr
}

console.log(merged([1,2,4],[1,3,4]));




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;