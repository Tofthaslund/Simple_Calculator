// Wait for the DOM to finish loading before runnig the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked submit!");
            } else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            } 
        })
    }

    runGame("addition");
})

function runGame(gameType){

    // Generte two random numbers between 1 and 25
    // Math.floor rounds down to the whole number
    // Math.random generates random numbers

   let num1 = Math.floor(Math.random() *25 ) +1;
   let num2 = Math.floor(Math.random() *25 ) +1;

   if (gameType === "addition"){
       displayAdditionQuestion(num1, num2);
   }else {
       alert(`Unknown game type ${gameType}`);
       throw `unknown game type ${gameType}, aborting`;
   }
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

    //Get the operands (teh numbers) and the oerator (plus, minus etc)
    //directly from the DOM

    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+"){
        return [operand1 + operand2, "addition"];
    }else{
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, aborting`;
    }
}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2){

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}