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


    let a = 0, b = 0;
    let finalArr = [];

    //This while be still running until one of the two arrays get to his final element and break
    while(a < arrA.length && b < arrB.length){
        //We will evalue array A y B in his firts position the once that be < to the other will be storage
        if(arrA[a] < arrB[b] ){
           finalArr.push(arrA[a]);
            a +=1 ; //in this case then arrA go to his followed position and evaluate it relate to arrB[currentPosition]
        } else { //else b go trought and a still in his currentposition
            finalArr.push(arrB[b]);
            b += 1 ;
        }
    }

    /* once we finished we need to evaluate the remainings values 
    that still in one of the two arrays to push then into finalArr */

    while(a < arrA.length){
        finalArr.push(arrA[a]);
        a +=1;
    }

    while(b < arrB.length){
        finalArr.push(arrB[b]);
        b +=1;
    }

    return finalArr;

    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;