function changePlay(player){
    switch (player){
        case 0:
            let children = document.getElementById('buttons').children;
            for (let i = 0; i < children.length; i++){
                //console.log(children[i]);
                document.getElementById(children[i].id).textContent = 'N';
                document.getElementById(children[i].id).style.backgroundColor = '#C4C4C4';
                /*document.getElementById(children[i].id).classList.remove('bt:hover');*/
                document.getElementById(children[i].id).style.pointerEvents = 'none';
            }
            break;
        case 1:
            document.getElementById('bt1').textContent = 'X';
            break;
        case 2:
            break;
        default:
    }
}

function openNameChange(){

    const bpc1 = document.getElementById('bpc1');
    const bpc2 = document.getElementById('bpc2');

    bpc1.addEventListener('click', function(){

        const abt = document.getElementById('aName');

        document.getElementById('cName').style.display = "block";

        abt.addEventListener('click', function(){

            var input = document.getElementById("cBarForm").value;

            this.player1 = input;
            console.log(this.player1);

            input.value = null;

            document.getElementById('cName').style.display = "none";

            document.getElementById('pl1').textContent = this.player1
        });

    });

    bpc2.addEventListener('click', function(){

        const abt = document.getElementById('aName');

        document.getElementById('cName').style.display = "block";

        abt.addEventListener('click', function(){

            var input2 = document.getElementById("cBarForm").value;

            this.player2 = input2;
            console.log(this.player2);

            input2.value = "";

            document.getElementById('cName').style.display = "none";

            document.getElementById('pl2').textContent = this.player2
        });

    });

}