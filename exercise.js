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
    let mergedArray = []; //array where the other two will be saved
    let i = 0, j = 0; //two separate counters, one for each array
    while((i<arrA.length)&&(j<arrB.length)){ //running through each array
        if(arrA[i]<arrB[j]){ //running through the arrays to see if they have the same length
            mergedArray.push(arrA[i]);
            i++;
        }else{
            mergedArray.push(arrB[j]);
            j++;
        }
    }    
if(i<=(arrA.length-1)){ //we run the array backwards
        arrA.splice(0,i); //we splice the first array
        mergedArray=mergedArray.concat(arrA); //we add the elements of the first array
    } else if(j<=(arrB.length-1)){ //we run the other array backwards too
        arrB.splice(0,j); //we splice the 2nd array
        mergedArray=mergedArray.concat(arrB); //we add the elements of the second array
    }
return mergedArray;
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;