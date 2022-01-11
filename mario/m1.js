var mensagem;




function mario1(){
    while(mensagem != 1 || mensagem != 2){
        mensagem = prompt('O que fazer agora? \n \n 1 - Ir até o console \n \n 2 - Seguir o seu caminho');

        if (mensagem == 2){
            window.alert('Seguir o seu caminho? Hnm...');
            window.alert('Mas vamos lá né...');
            return window.location.href = './mario2.html';
        }
        else if (mensagem == 1){
            document.getElementsByClassName('conteudo')[0].innerHTML=`<h1>Você Perdeu</h1>
            <img class="gifLose" src="../images/mario-l.gif" alt="">
            <p class= "descricao"> Você voltou no tempo ao acessar um Nintendo DS, o mundo Nintendo precisa de novidade, talvez ser mais inovador te ajude nesse processo. </p>
            <p> Tenta denovo. Nem é tão difícil assim vai...</p>
            <a href="../index.html"><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a>
        </main>`;
            break;
        }
        else{
            alert('Digite 1 ou 2');
        }
    }
}
setTimeout(mario1, 3000);