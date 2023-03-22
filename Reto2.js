// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function imprimirPrimerArr(arr){
    console.log(arr[0])
}

// Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function imprimirElementoPorElemento(array){
    for(i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

//  Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).


let obj = {
    palabra: "musica",
    animal: "elefante",
    color: "gris"
}

function imprimirElementoPorElementoObj(obj){
    const arr = Object.values(obj)
    for(i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
// Recuerda que a diferencia de las listas arrays[], no se pueden buscar los elementos dentro de un objeto por index.
//Lo que hicimos en este caso fue: con Object.values. Pasamos los objetos a un array, pero solo nos trae los valores que le dimos.