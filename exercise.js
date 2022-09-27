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
    // First, I concat the two arrays into a variable so that I can work with the result. 
    let merge = arrA.concat(arrB);

    // I created a for loop to look into each element of the concat array
    for (let i = 0; i < merge.length - 1; i++) {
        // Then, as the first loop just execute itself, this second foor loop is gonna be executed the length of the merged array times.
        for (let j = 0; j < merge.length - 1; j++) {
            // So we ask if the first position is bigger than the second position of the merged array
            if (merge[j] > merge[j + 1]) {
                // If true, I created a variale to storage that value
                let auxiliar = merge[j];
                // As we want to sort from lower to bigger, we change the lower value(which is the one that is in the second position)
                // to the first position as below:
                merge[j] = merge[j + 1];
                // Now in the second position we need to put the exactly first position, but as we just change that value, we need to use 
                // the variale that we created above.
                merge[j + 1] = auxiliar;

            }

            // If the element of the first position of the merged array is the same as the second one, the elements remain in their positions
            else if (merge[j] === merge[j + 1]) {
                merge[j] = merge[j];
                merge[j + 1] = merge[j + 1];
            }
        }
    }
    return merge
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;