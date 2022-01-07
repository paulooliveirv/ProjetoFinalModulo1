var mensagem;




function pikachu2(){
    while(mensagem != 1 || mensagem != 2){
        mensagem = prompt('O que fazer agora? \n \n 1 - Enfrentar o Gyarados \n \n 2 - Checar com mais calma');

        if (mensagem == 1){
            window.alert('É isso, vamos pra cima dele!!');
            return window.location.href = './pikachu3.html';
        }
        else if (mensagem == 2){
            document.getElementsByClassName('conteudo')[0].innerHTML=`<h1>Você Perdeu</h1>
            <img class="gifLose" src="../images/pikachu-lose.gif" alt="">
            <p class= "descricao">Você não agiu à tempo, o que fez com que o gyarados conseguisse destruir todo o sistema, o que gerou um baita problema para o Mundo Nintendo</p>
            <p> Tenta novamente ai, vai ficar cada vez mais facil</p>
            <a href="../index.html"><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a>
        </main>`;
            break;
        }
        else{
            alert('Digite 1 ou 2');
        }
    }
}
setTimeout(pikachu2, 6000);