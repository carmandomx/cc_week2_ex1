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

    const BubbleSort = (arr) => { //creates a bubble sort method to sort the resulting array
        for (i=0; i<arr.length; i++) { //create a for loop to iterate through the array
            for(j=i+1; j<arr.length; j++) { //create another for loop to be able to grab 2 elements at the same time
                if(arr[i] > arr [j]) { //if our first element is higher than the next one..
                    let temp = arr[i]; //save the first element in a temporal variable so its value is not lost
                    arr[i] = arr[j]; //set our first element to have the value of the next, which is lesser
                    arr[j] = temp; //set our second element to have the value of the first one, stored in the temporal variable
                }
            }
        }
        return arr;
    }

    let result = []; //creates an empty array to use as result
    for(i=0; i<arrA.length; i++) { //for loop to insert every element on array A to our result array
        result.push(arrA[i]);
    }
    for(j=0; j<arrB.length; j++) {//for loop to insert every element on array B to our result array
        result.push(arrB[j]);
    }

    result = BubbleSort(result); //sort our result array with out Bubble Sort method


    return result; //return the resulting array

    
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;