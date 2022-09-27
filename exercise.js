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
    let array = [...arrA,...arrB];
    let sort = [];
    let counter=0;
    do{
    counter=0;
    for(let i=0; i<array.length; i++){
        if(array[i]>array[i+1]){
            swap=array[i+1];
            array[i+1]=array[i];
            array[i]=swap;
            counter++;
        }
    }
    }while(counter>0);

    return array;
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;