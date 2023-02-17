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

    //We store two arrays in a new one, arrA and arrB
    let nArrAB = arrA.concat(arrB);
    
    //We should go through new array and make the comparisson to know
    //who value is smaller, we store the element in a temp variable and we order the array
    for(let i=0; i<nArrAB.length;i++){
        for(let j = 0; j<i; j++)
        if(nArrAB[i]<nArrAB[j]){
            var temp = nArrAB[i];
            nArrAB[i] = nArrAB[j];
            nArrAB[j] = temp;
            //esto es un comentario
        }
    }

    //we return the new ordered Array
    return nArrAB;
    
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;