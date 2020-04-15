console.log('Im here');


//Bug on player validation... not 2 but the player name != than ""

//let board = [
//    [0, 0, 0],
//    [0, 0, 0],
//    [0, 0, 0]
//];

let player1 = "";
let player2 = "";
let validation = 0;

let playerTurn = 1;

let rounds = 0;

lockGame();



validation = openNameChange(validation);

console.log(validation);


//do{
//    if(validation == 2){
//        do{
//            changePlay(playerTurn, rounds);
//            console.log("Inside");
//            rounds += 1;
//        }while(rounds < 9);
//    }
//}while(validation < 2);





