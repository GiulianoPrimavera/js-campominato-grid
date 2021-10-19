const startGame = document.getElementById("start_game");
const difficultyOption = document.getElementById("difficulty_option");
const mainContainer = document.getElementById("main_container");

//al click del bottone "invia" devo leggere il valore del livello di difficoltà del select
startGame.addEventListener("click", function(){
    //leggo il valore che si trova nell'opzione scelta dall'utente e lo assegno a una variabile
    const difficultyLevel = difficultyOption.value;

    console.log("l'utente ha scelto il livello di difficoltà", difficultyLevel);

    //qui viene scelto il numero di caselle da creare
    const totalBoxes = getNBoxes(difficultyLevel);
    console.log("il numero totale di scatole è", totalBoxes);

    //genero le scatole
    boxesGenerator(totalBoxes);
});

//con questa funzione tengo conto del numero di quadrati da creare
function getNBoxes(value){
    //creo una variabile che tenga conto del numero di quadrati da creare in base al livello di difficoltà
    let nBoxes;
    
    //assegno alla variabile nBoxes il numero di scatole che voglio creare
    if(value === "1"){
        //assegno alla variabile "nBoxes" il valore 49
        nBoxes = 49;
    }else if(value === "2"){
        //assegno alla variabile "nBoxes" il valore 81
        nBoxes = 81;     
    }else if(value === "3"){
        //assegno alla variabile "nBoxes" il valore 100
        nBoxes = 100;
    }
    
    return nBoxes;
}

//devo generare le boxes
function boxesGenerator (value){

    mainContainer.innerHTML = "";
    
    for (let i = 0; i <= value; i++){
        mainContainer.innerHTML += `<div class="box">${i}</div>`
    }

}

 