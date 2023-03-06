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
    let answer = [];
    for(let i=0;i<arrA.length;i++){
        answer.push(arrA[i]);

    }
    for(let i=0;i<arrB.length;i++){ //Two for loops that combine both arrays in the answer array
        answer.push(arrB[i]);
    }
    for(let i=0; i<answer.length;i++){ //New for and nested for for making an bubblesort algorithm
        for(let j=0; j<answer.length-i-1;j++){
            if(answer[j]>answer[j+1]){ //comparison between a number in the array with the next one to the right, if value on left is greater they switch places
                [answer[j],answer[j+1]] = [answer[j+1],answer[j]]; //they will continue switching places over and over again until the array is finaly sorted
            }
        }
    }
    return answer; // return the sorted array
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;