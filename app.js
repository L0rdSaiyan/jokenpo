function jogo(btn){


    let cpu = Math.floor(3* Math.random()+1);

    if(btn=="pedra" && cpu==1){

        alert("Empate! Nós dois jogamos pedra!")

    }
    else if(btn=="pedra" && cpu==2){

        alert("Eu ganhei! Eu joguei papel! :)")

    }
    else if(btn=="pedra" && cpu==3){

        alert("Você ganhou! Eu joguei tesoura :(")

    }



}

