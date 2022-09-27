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

    let mergedArray = [];
    let i = 0, j = 0;

    while ((i < arrA.length) && (j < arrB.length)){
        // Comparing both arrays elements and storing them in a new array
        // Since i want to keep checking the one that is "bigger" i only
        // increase the step of the small one.
        if (arrA[i] < arrB[j]) {
            mergedArray.push(arrA[i]);
            i++;
        }
        else{
            mergedArray.push(arrB[j]);
            j++;
        }
    }

    // Storing remaining elements if arraA was the one to break first
    if (i <= (arrA.length-1)){    
        arrA.splice(0,i);
        mergedArray = mergedArray.concat(arrA);
    }

    // Storing remaining elements if arraB was the one to break first
    else if (j <= (arrB.length-1)){
        arrB.splice(0,j);
        mergedArray = mergedArray.concat(arrB);  
    }
    return mergedArray;
}

// let a = [1,2,4];
// let b = [1,3,4];
// console.log(merged(a,b))


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;