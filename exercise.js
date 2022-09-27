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
    function sort(arr){
        const lenght = arr.length;
        const count = 0;
        for(i=0;i<lenght;i++){
            if(arr[i]>arr[i+1]){
              var temp = arr[i];
              arr[i] = arr[i+1];
            arr[i+1]= temp;
            i=-1;
          }
        }
        return arr;
    
    }
    const mergedArray = arrA.concat(arrB);
    return sort(mergedArray);
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;