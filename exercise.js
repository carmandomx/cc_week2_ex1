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
    
    let newArr = arrA.concat(arrB);
    
    let done = false;
    while (!done) {
        done = true;
        for (let i = 0; i < newArr.length - 1; i++){
            if (newArr[i] > newArr[i+1]){
                done = false;
                let temp = newArr[i];
                newArr[i] = newArr[i+1];
                newArr[i+1] = temp;
            }
        }
    }
    
    return newArr;

    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;