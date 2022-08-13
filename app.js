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
    else if(btn=="tesoura" && cpu==1){

        alert("Eu ganhei! Eu joguei pedra!")

    }
    else if(btn=="tesoura" && cpu==2){

        alert("Você ganhou! Eu joguei papel")

    }
    else if(btn=="tesoura" && cpu==3){

        alert("Empate! Nós dois jogamos tesoura!")

    }
 
}



