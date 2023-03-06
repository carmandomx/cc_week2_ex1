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
    let sortedd =[] // Merged array
    let A_length=arrA.length
    let B_length=arrB.length
    let A_pos=0 //current position in A array
    let B_pos=0 // current position in B array
    const max_length=Math.max(A_length,B_length) //greater array length between arrays
    while (A_pos<max_length+1 && B_pos<max_length+1){
        let A_value =arrA[A_pos] //value of A in te current position
        let B_value =arrB[B_pos]
        if (A_value<=B_value && A_pos<A_length || B_value===undefined){ // if A value is smaller and B hasnt gives all its elements...
            sortedd.push(A_value)
            A_pos+=1
        } else if(B_value<A_value && B_pos<B_length || A_value===undefined){// if B value is smaller and A hasnt gives all its elements...
            sortedd.push(B_value)
            B_pos+=1
        }
    }
    sortedd.pop() //Pop of  undefined last element
    return sortedd

}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;