//areglo que contiene las respuestas correctas
let correctas=[1,1,2,1,2,1,2,2]
//arreglo donde se guardan las repuestas del usuario
let opcion_elegida=[];

let cantidad_correctas=0;

//funcion que toma el num de pregunta y el input elegido de esa pregunta
function repuesta(num_pregunta,seleccionada){  
opcion_elegida[num_pregunta]=seleccionada.value;


    id="p" + num_pregunta;

    labels=document.getElementById(id).childNodes;x
    labels[3].style.backgroundColor="white";
    labels[5].style.backgroundColor="white";
    labels[7].style.backgroundColor="white";

    seleccionada.parentNode.style.backgroundColor="#cec0fc";
}
function corregir(){
    cantidad_correctas=0;
    for(i=0; i < correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML= cantidad_correctas;
}	