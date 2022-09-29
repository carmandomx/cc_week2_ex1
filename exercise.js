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
    for(var i=0; i<arrB.length; i++){
        arrA.push(arrB[i]); //pushing A into B
    }
    console.log(arrA);


    //Time to paste the bubblesort function from ex2 of past week
    let count=1;
    while (count>0)
    { 
        count=0;
for(let i=0; i<arrA.length; i++) //Taking a value and comparing 
    {
        if (arrA[i]>arrA[i+1])
        {
            let numerex=arrA[i+1];
            arrA[i+1]=arrA[i];
            arrA[i]=numerex;
            count++;
        }
        }
    }

    return arrA;
    
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;
