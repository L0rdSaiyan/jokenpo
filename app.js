let pontuacao1 = 0
let pontuacao2 = 0

function jogo(btn){

    let cpu = Math.floor(3* Math.random()+1)
    const local1 = document.getElementById("p1")
    const local2 = document.getElementById("p2")
    const saida = document.getElementById("saida")
    saida.innerText = ""


    if(btn=="pedra" && cpu==1){

        saida.innerText = "Empate! Nós dois jogamos pedra!"

    }
        else if(btn=="pedra" && cpu==2){

        saida.innerText = "Eu ganhei! Eu joguei Papel! :)"
        pontuacao2 = pontuacao2+1
        local2.innerText = pontuacao2

    }
            else if(btn=="pedra" && cpu==3){

            saida.innerText = "Você ganhou! Eu joguei tesoura! :("
            pontuacao1 = pontuacao1+1
            local1.innerText = pontuacao1

    }
                else if(btn=="tesoura" && cpu==1){

                saida.innerText = "Eu ganhei! Eu joguei pedra! :)"
                pontuacao2 = pontuacao2+1
                local2.innerText = pontuacao2
    }
                    else if(btn=="tesoura" && cpu==2){

                    saida.innerText = "Você ganhou! Eu joguei papel! :("
                    pontuacao1 = pontuacao1+1
                    local1.innerText = pontuacao1

    }
                        else if(btn=="tesoura" && cpu==3){

                    saida.innerText = "Empate Nós dois jogamos tesoura!"
                
    }
                            else if(btn=="papel" &&  cpu==1){

                        saida.innerText = "Você ganhou! Eu joguei pedra! :("
                        pontuacao1 = pontuacao1+1
                        local1.innerText = pontuacao1


    }
                         else if(btn=="papel" && cpu==2){

                    saida.innerText = "Empate! Nós dois jogamos papel"
                   
    }
                    else if(btn=="papel" && cpu==3){

             saida.innerText = "Eu ganhei! Eu joguei tesoura! :)"
             pontuacao2 = pontuacao2+1
             local2.innerText = pontuacao2

    }

}


function finish(){

    const local1 = document.getElementById("p1")
    const local2 = document.getElementById("p2")
    const saida = document.getElementById("saida")
    const mvp = document.getElementById("mvp")
    const placar1 = document.getElementById("placar1")
    const placar2 = document.getElementById("placar2")

    local1.innerText = ""
    local2.innerText = ""
    saida.innerText = ""
    placar1,placar2.innerText = ""

    if(pontuacao1>pontuacao2){
        
        placar1.innerText = `Player - ${pontuacao1}`
        placar2.innerText = `CPU - ${pontuacao2}`

    }else if(pontuacao2>pontuacao1){

        placar1.innerText = `CPU - ${pontuacao2}`
        placar2.innerText = `Player - ${pontuacao1}`

    }else{

        placar1.innerText = `Player - ${pontuacao1}`
        placar2.innerText = `CPU - ${pontuacao2}`

    }

    pontuacao1 = 0
    pontuacao2 = 0

}