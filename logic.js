//Creo una variable donde guardo el tiempo que dura prendida cada luz
let time = 3000
    
//Creo una variable donde guardo el indice que voy a usar para buscar entre mis luces
let index = 0

//Creo una variable donde guardo una lista con los elementos que tienen la clase luz
luces = document.getElementsByClassName('luz')

//Creo un intervalo (funcion de JS) para que ejecute mi funcion controladorSemaforo cada 3 segundos
setInterval(controladorSemaforo, time);

//Creo la funcion que va a llamar el intervalo anterior
function controladorSemaforo(){

    //Hago un bucle sobre mi lista de luces
    for(var i = 0; i <= (luces.length - 1); i++){

        //Si la luz tiene la clase prendida ejecuta el codigo dentro del IF
        if(luces[i].classList.contains('prendida')){
            
            //Borra la clase prendida de la luz que la posee
            luces[i].classList.remove('prendida')
        }

    }

    //Agrega la clase prendida a la luz que corresponde segun el indice
    luces[index].classList.add('prendida')
    
    //Evalua si la variable index es menor al largo de mi variable que contiene las luces
    if(index < (luces.length - 1)){

        //Si index es menor, le suma uno
        index++
    }
    else{

        //Si index es igual al largo de la variable que contiene las luces, 
        //setea la variable index a 0 para volver a empezar
        index = 0
    }
}