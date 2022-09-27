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
    //Firstly we must merge the arrays, we could merge them in one of them but let's stick to creating a new one
    let sortedArray = [];
    
    /*The concat() function let's us make a new array that is the ordered values of the
    2 arrays, so we still need to sort them*/
    sortedArray = arrA.concat(arrB);

    //To sort the array we will use a bubble sort
    for(let i = 0; i < sortedArray.length; i++){
        for(let j = 0; j < sortedArray.length; j++){
            if(sortedArray[i] < sortedArray[j]){
                //We use a function for swaping the elements and sorting them
                sortedArray = swapElements(sortedArray, i, j);
                
            }
        }
    }

    //We just return the sorted array
    return sortedArray;
    /* Only make changes below this comment */
}

const swapElements = (arra, indexA, indexB) => {
    let temp = arra[indexA];
    arra[indexA] = arra[indexB];
    arra[indexB] = temp;
    return arra;
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;