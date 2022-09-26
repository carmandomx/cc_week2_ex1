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

    //In this array I will save the result
    let result = [];

    //for this exercise I need a complete control of the indexes, so I have created a variable for each index
    let resultIndex = 0;
    let arrA_Index = 0;
    let ArrB_Index = 0;

    //The while process will continue until it reaches the sum of the 2 input lengths.
    while(resultIndex < (arrA.length + arrB.length)){
        //As both arrays are ordered, I can simply compare the first of each

        //if they are both equal, I add them both to the result, 
        //increment the index of the result by 2, and increment the indices of each array by 1
        if(arrA[arrA_Index] == arrB[ArrB_Index]){
            result[resultIndex] = arrA[arrA_Index];
            result[resultIndex+1] = arrB[ArrB_Index];
            resultIndex = resultIndex + 2;
            arrA_Index = arrA_Index + 1;
            ArrB_Index = ArrB_Index + 1;
        }

        //for the following 2 cases, 
        //I add to the largest element, 
        //increase the index of its array by 1 and increase the index of the result by 1

        else if(arrA[arrA_Index] < arrB[ArrB_Index]){
            result[resultIndex] = arrA[arrA_Index];
            resultIndex = resultIndex + 1;
            arrA_Index = arrA_Index + 1;
        }

        else if(arrA[arrA_Index] > arrB[ArrB_Index]){
            result[resultIndex] = arrB[ArrB_Index];
            resultIndex = resultIndex + 1;
            ArrB_Index = ArrB_Index +1;

        }

        //The last 2 cases are for the final part, because one of the arrays will have an 
        //index with an element already undefined, so I only have to add the missing element 
        //of the other array to finish

        else if (typeof arrA[arrA_Index] == 'undefined'){
            result[resultIndex] = arrB[ArrB_Index];
            resultIndex = resultIndex + 1;
            ArrB_Index = ArrB_Index +1;
        }

        else{
            result[resultIndex] = arrA[arrA_Index];
            resultIndex = resultIndex + 1;
            arrA_Index = arrA_Index + 1;
        }






    }



    return result;
    
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;