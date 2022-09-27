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
    let mergedArr=[]; //A new array to concat both arrays
    let temp; //A temp variable to use for the sort

    //a loop to concat the arrays received in the empty one
    for (let i = 0; i < arrA.length; i++) { 
            mergedArr[i]=arrA[i];
    }
    for (let i = 0; i < arrB.length; i++) {
        mergedArr[i+arrA.length]=arrB[i];
    }
     
        let a=0; //A temp count for sorting purposes
        do {
              for (let i = 0; i < mergedArr.length; i++) { //A loop to run over all the array psitions
          if (mergedArr[i]>mergedArr[i+1]) { //The conditional to sort the elements
              temp=mergedArr[i+1]; //Temp use for saving the element deleted
              mergedArr[i+1]= mergedArr[i];
              mergedArr[i]=temp;
                }
          }  
          a++;
        } while (a==1); //To give a double check on the sort loop
        
    return mergedArr;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;