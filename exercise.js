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
  const mergedArray = []; //Creo un array donde se guardaran los valores ordenados
  let i = 0; //Creo variables para iteración
  let j = 0;
  
  //Ciclo for que recorre los arrays hasta que llega al final de uno 
  for (; i < arrA.length && j < arrB.length; ) { 
    if (arrA[i] < arrB[j]) { //Si el valor de i es menor al de j, guarda el valor de i y avanza una posición en el array (i++)
      mergedArray.push(arrA[i]);
      i++;
    } else {
      mergedArray.push(arrB[j]); //En cambio si el valor de j es menor al de i, guarda el valor de j y avanza una posición en el array(j++)
      j++;
    }
  }
  //Si se llega a esta parte es por que uno de los dos arrays era más grande que el otro. 
  for (; i < arrA.length; i++) {  //Este ciclo es en caso de que el arrayA sea más grande que el arrayB
    mergedArray.push(arrA[i]); //Empuja a nuestro array final los valores restantes
  }

  for (; j < arrB.length; j++) { //Este ciclo es igual que el anteior, solo que es en caso de que el arrayB sea más grande que el arrayA
    mergedArray.push(arrB[j]);
  }

  return mergedArray; //Al final de los ciclos se retorna el array ordenado
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.merged = merged;
