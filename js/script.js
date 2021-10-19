const startGame = document.getElementById("start_game");
const difficultyOption = document.getElementById("difficulty_option");

//al click del bottone "invia" devo leggere il valore del livello di difficoltà del select
startGame.addEventListener("click", function(){
    //leggo il valore che si trova nell'opzione scelta dall'utente e lo assegno a una variabile
    const difficultyLevel = difficultyOption.value;

    console.log("l'utente ha scelto il livello di difficoltà", difficultyLevel);

});

//con questa funzione tiene conto del numero di quadrati da creare
function getNBoxes(){
    //creo una variabile che tenga conto del numero di quadrati da creare in base al livello di difficoltà
    let nBoxes;
    
    //assegno alla variabile nBoxes il numero di scatole che voglio creare
    if(difficultyLevel === "1"){
        //assegno alla variabile "nBoxes" il valore 49
        nBoxes = 49;
    }else if(difficultyLevel === "2"){
        //assegno alla variabile "nBoxes" il valore 81
        nBoxes = 81;     
    }else if(difficultyLevel === "3"){
        //assegno alla variabile "nBoxes" il valore 100
        nBoxes = 100;
    }

    return nBoxes;
}