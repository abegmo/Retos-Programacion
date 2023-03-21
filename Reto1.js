// Objects: Función constructora

//Reto: Genera una funcion constructora y hacer un loop para hacer una lista de 5 carros que se vayan construyendo solos, no tan de forma manual. La idea del loop es que pueda generar nuevas instancias de la funcion constructora

function auto (marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;

}

let autos = [];

for(i = 0; i < 5; i++){
    let marca = prompt("Ingresa marca del auto");
    let modelo = prompt("Ingresa modelo del auto");
    let annio = prompt("Ingresa annio del auto");

    autos.push(new auto(marca, modelo, annio));
    //Almacenamos dentro de la variable "autos" las variables que nos daría el usuario desde prompt.
}

for(i = 0; i > autos.length; i++){
    console.log(autos[i]);
}
//recuerda que la "i" toma el valor que esta dentro del "for". Al cambiarse te indica el index/posicion

//---------------------------

//Otra forma de realizarlo: link:

// https://static.platzi.com/media/user_upload/ejercicio-1330da3a-fbf9-47ec-9131-07e0c072638d.jpg

// https://platzi.com/clases/1814-basico-javascript/55628-playground-permiso-para-conducir/