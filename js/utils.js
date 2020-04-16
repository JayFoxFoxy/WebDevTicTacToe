function openNameChange(validation){

    const bpc1 = document.getElementById('bpc1');
    const bpc2 = document.getElementById('bpc2');

    bpc1.onclick = function() {

        const abt = document.getElementById('aName');

        document.getElementById('cName').style.display = "block";

        abt.onclick = function(){

            var input = document.getElementById("cBarForm").value;

            this.player1 = input;
            //console.log(this.player1);
            //console.log(input);

            document.getElementById('cBarForm').value = null;

            document.getElementById('cName').style.display = "none";

            document.getElementById('pl1').textContent = this.player1;

            validation += 1;

        //console.log(validation);

        //if(validation == 2){
        if(this.player1.length != 0 && this.player2.length !=0){
            unlockGame();
            //this.playerTurn = 1;
            //console.log(this.playerTurn);
        }

        }

        return validation;

    }

    bpc2.onclick = function(){

        const abt = document.getElementById('aName');

        document.getElementById('cName').style.display = "block";

        abt.onclick = function(){

            var input2 = document.getElementById("cBarForm").value;

            this.player2 = input2;
            //console.log(this.player1);
            //console.log(input);

            document.getElementById('cBarForm').value = null;

            document.getElementById('cName').style.display = "none";

            document.getElementById('pl2').textContent = this.player2;

            validation += 1;

        //console.log(validation);

        //if(validation == 2){
            if(this.player1.length != 0 && this.player2.length !=0){
            unlockGame();
            //this.playerTurn = 1;
            //console.log(this.playerTurn);
        }

        }
 
        return validation;


    }

    
}

function lockGame(){

    let children = document.getElementById('buttons').children;
            for (let i = 0; i < children.length; i++){
                //console.log(children[i]);
                document.getElementById(children[i].id).textContent = 'N';
                document.getElementById(children[i].id).style.backgroundColor = '#C4C4C4';
                /*document.getElementById(children[i].id).classList.remove('bt:hover');*/
                document.getElementById(children[i].id).style.pointerEvents = 'none';
            }

}

function unlockGame(){

    let children = document.getElementById('buttons').children;

    for (let i = 0; i < children.length; i++){
        document.getElementById(children[i].id).style.pointerEvents = 'auto';
        document.getElementById(children[i].id).textContent = '';
        //document.getElementById('displayText').textContent = 'Player 1 its your turn';
    }

    document.getElementById('displayText').textContent = 'Player 1 its your turn';

    simplePlay();

}

function simplePlay(){

    let board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    

    let children = document.getElementById('buttons').children;

    let round = 0;
    console.log(round);
    console.log(board);
    let player = '';

    //if(round % 2 == 0){
    //    player = 'X';
    //    
    //}else{
    //    player = 'O';
    //}

    for (let i = 0; i < children.length; i++){
        document.getElementById(children[i].id).addEventListener('click', function (){

            if(round % 2 == 0){
                player = 'X';
                document.getElementById('displayText').textContent = 'Player 2 its your turn';
            }else{
                player = 'O';
                document.getElementById('displayText').textContent = 'Player 1 its your turn';
            }

            document.getElementById(children[i].id).textContent = player;
            document.getElementById(children[i].id).style.pointerEvents = 'none';

            board = arrayReg(i, round, board);
            console.log(board);
            board = checkWin(board, round);

            
            //checkPlay();

            round ++;
        });
        //console.log(children[i]);
        //document.getElementById(children[i].id).onclick = function (){

            

        //}
    }


}

function arrayReg(number, round, board){
    if(number < 3){
        if(round % 2 == 0){
            board[0][number] = 1;
        }else{
            board[0][number] = 2;
        }
    }else if(number > 2 && number < 5){
        if(round % 2 == 0){
            board[1][number-3] = 1;
        }else{
            board[1][number-3] = 2;
        }
    }else{
        if(round % 2 == 0){
            board[2][number-6] = 1;
        }else{
            board[2][number-6] = 2;
        }
    }

    return board;
}

function checkWin(board, round){
    
    if(board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1){
        //alert('Player 1 wins');
        winMsg(1);
        //resetBoard(board);
        unlockGame();
    }else if(board[0][0] === 2 && board[0][1] === 2 && board[0][2] === 2){
        //alert('Player 2 wins');
        winMsg(2);
        //resetBoard(board);
        unlockGame();
    }else if(board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1){
        //alert('Player 1 wins');
        winMsg(1);
        //resetBoard(board);
        unlockGame();
    }else if(board[1][0] === 2 && board[1][1] === 2 && board[1][2] === 2){
        //alert('Player 2 wins');
        winMsg(2);
        //resetBoard(board);
        unlockGame();
    }else if(board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1){
        //alert('Player 1 wins');
        winMsg(1);
        //resetBoard(board);
        unlockGame();
    }else if(board[2][0] === 2 && board[2][1] === 2 && board[2][2] === 2){
        //alert('Player 2 wins');
        winMsg(2);
        //resetBoard(board);
        unlockGame();
    }else if(board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1){
        //alert('Player 1 wins');
        winMsg(1);
        //resetBoard(board);
        unlockGame();
    }else if(board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2){
        //alert('Player 2 wins');
        winMsg(2);
        //resetBoard(board);
        unlockGame();
    }else if(board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1){
        //alert('Player 1 wins');
        winMsg(1);
        //resetBoard(board);
        unlockGame();
    }else if(board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2){
        //alert('Player 2 wins');
        winMsg(2);
        //resetBoard(board);
        unlockGame();
    }else if(board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1){
        //alert('Player 1 wins');
        winMsg(1);
        //resetBoard(board);
        unlockGame();
    }else if(board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2){
        //alert('Player 2 wins');
        winMsg(2);
        //resetBoard(board);
        unlockGame();
    }else if(board[0][2] === 1 && board[1][1] === 1 && board[2][2] === 1){
        //alert('Player 1 wins');
        winMsg(1);
        //resetBoard(board);
        unlockGame();
    }else if(board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2){
        //alert('Player 2 wins');
        winMsg(2);
        //resetBoard(board);
        unlockGame();
    }else if(round === 8){
        //alert('Draw!');
        winMsg(0);
        //resetBoard(board);
        unlockGame();
    }

    return board;
}

function winMsg(player) {
    switch(player){
        case 0:
            document.getElementById('newGame').style.display = "block";
            document.getElementById('gameFinish').innerHTML = 'Draw!';
            
            setTimeout(function () {
                document.getElementById('newGame').style.display = "none";
            }, 5000);
            unlockGame();
            break;
        case 1:
            document.getElementById('newGame').style.display = "block";
            document.getElementById('gameFinish').innerHTML = 'Player 1 won the game!<br/><br/>5 seconds to reset!';
            //wait(5000);
            setTimeout(function () {
                document.getElementById('newGame').style.display = "none";
            }, 5000);
            //document.getElementById('newGame').style.display = "none";
            unlockGame();
            break;
        case 2:
            document.getElementById('newGame').style.display = "block";
            document.getElementById('gameFinish').innerHTML = 'Player 2 won the game!<br/><br/>5 seconds to reset!';
            setTimeout(function () {
                document.getElementById('newGame').style.display = "none";
            }, 5000);
            //document.getElementById('newGame').style.display = "none";
            unlockGame();
            break;
        default:
            console.log('Error!');
    }
    
}

function resetBoard(board){

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            board[i][j] = 0;
        }
    }



}
    /*bpc1.addEventListener('click', function(){

        const abt = document.getElementById('aName');

        document.getElementById('cName').style.display = "block";

        abt.addEventListener('click', function(){

            var input = document.getElementById("cBarForm").value;

            this.player1 = input;
            //console.log(this.player1);
            //console.log(input);

            document.getElementById('cBarForm').value = null;

            document.getElementById('cName').style.display = "none";

            document.getElementById('pl1').textContent = this.player1

            
        });

        console.log(validation);
 

    });

    bpc2.addEventListener('click', function(){

        const abt = document.getElementById('aName');

        document.getElementById('cName').style.display = "block";

        abt.addEventListener('click', function(){

            var input2 = document.getElementById("cBarForm").value;

            this.player2 = input2;
            //console.log(this.player2);
            //console.log(input2);

            document.getElementById('cBarForm').value = null;

            document.getElementById('cName').style.display = "none";

            document.getElementById('pl2').textContent = this.player2
        });

        console.log(validation);
        return validation++;

    });*/



/*function openNameChange(validation){

    const bpc1 = document.getElementById('bpc1');

    bpc1.addEventListener('click', function(){

        const abt = document.getElementById('aName');

        document.getElementById('cName').style.display = "block";

        abt.addEventListener('click', function(){

            var input = document.getElementById("cBarForm").value;

            this.player1 = input;
            console.log(this.player1);

            document.getElementById('cBarForm').value = null;

            document.getElementById('cName').style.display = "none";

            document.getElementById('pl1').textContent = this.player1

            
        });

    });

   return validation++;

}
function openNameChange2(validation){

    const bpc2 = document.getElementById('bpc2');


    bpc2.addEventListener('click', function(){

        const abt = document.getElementById('aName');

        document.getElementById('cName').style.display = "block";

        abt.addEventListener('click', function(){

            var input2 = document.getElementById("cBarForm").value;

            this.player2 = input2;
            console.log(this.player2);

            document.getElementById('cBarForm').value = null;

            document.getElementById('cName').style.display = "none";

            document.getElementById('pl2').textContent = this.player2
        });

    });

    return validation++;

}*/