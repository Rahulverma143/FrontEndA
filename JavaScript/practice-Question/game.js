// practice Q2 

let gameNum = 25;
let userNum = prompt("Guess the game number:");

while(userNum != gameNum){
    userNum = prompt("You entered wrong number guess again:");
}

console.log("congrulation, you entered the right number");