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
    //Merge of my arrays
    let result = [...arrA, ...arrB]

    //Function to order the array
    function bubblesrt(arr) {
        let size = arr.length;
      //bubble sort
        for (let i = 0; i < size; i++) {
          for (let j = 0; j < size - i - 1; j++) {
            //if the array in this position i+1 is smaller, change the position
            if (arr[j] > arr[j + 1]) {
                //here it is important bc I use a pivot "temp" to change the position
              temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j + 1] = temp
            }
          }
        }
        //return my array ordered
        return arr;
      }
      
      result = bubblesrt(result);

      return result;
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;