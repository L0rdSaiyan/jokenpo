let pontuacao1 = 0;
let pontuacao2 = 0;

function jogo(btn){

    let cpu = Math.floor(3* Math.random()+1);
    const local1 = document.getElementById("p1")
    const local2 = document.getElementById("p2")


    if(btn=="pedra" && cpu==1){

        alert("Empate! Nós dois jogamos pedra!")

    }
        else if(btn=="pedra" && cpu==2){

        alert("Eu ganhei! Eu joguei papel! :)")
        pontuacao2 = pontuacao2+1
                console.log(pontuacao2)
                local2.innerText = pontuacao2

    }
            else if(btn=="pedra" && cpu==3){

            alert("Você ganhou! Eu joguei tesoura :(")
            pontuacao1 = pontuacao1+1
                        console.log(pontuacao1)
                        local1.innerText = pontuacao1

    }
                else if(btn=="tesoura" && cpu==1){

                alert("Eu ganhei! Eu joguei pedra!")
                pontuacao2 = pontuacao2+1
                console.log(pontuacao2)
                local2.innerText = pontuacao2
    }
                    else if(btn=="tesoura" && cpu==2){

                    alert("Você ganhou! Eu joguei papel")
                    pontuacao1 = pontuacao1+1
                        console.log(pontuacao1)
                        local1.innerText = pontuacao1


    }
                        else if(btn=="tesoura" && cpu==3){

                    alert("Empate! Nós dois jogamos tesoura!")
                    

    }
                            else if(btn=="papel" &&  cpu==1){

                        alert("Você ganhou! Eu joguei pedra :(")
                        pontuacao1 = pontuacao1+1
                        console.log(pontuacao1)
                        local1.innerText = pontuacao1


    }
                         else if(btn=="papel" && cpu==2){

                    alert("Empate! Nós dois jogamos papel")

    }
                    else if(btn=="papel" && cpu==3){

             alert("Eu ganhei! eu joguei tesoura!")
             pontuacao2 = pontuacao1+1
             console.log(pontuacao2)
             local2.innerText = pontuacao2

    }

}



