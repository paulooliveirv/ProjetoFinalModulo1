var mensagem;




function pikachu1(){
    while(mensagem != 1 || mensagem != 2){
        mensagem = prompt('O que fazer agora? \n \n 1 - Investigar para saber o que de fato aconteceu \n \n 2 - Correr para a sala, eles precisam de ajuda!');

        if (mensagem == 1){
            window.alert('Mandou bem, vamos para a próxima fase');
            return window.location.href = './pikachu2.html';
        }
        else if (mensagem == 2){
            document.getElementsByClassName('conteudo')[0].innerHTML=`<h1>Você Perdeu</h1>
            <img class="gifLose" src="../images/pikachu-lose.gif" alt="">
            <p class= "descricao">Você correu diretamente para a sala, ao chegar encontrou um outro pokémon de terra, não conseguiu dar conta do recado sozinho e acabou perdendo. Dessa vez a sua impaciência te levou ao fracasso. </p>
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
setTimeout(pikachu1, 3000);