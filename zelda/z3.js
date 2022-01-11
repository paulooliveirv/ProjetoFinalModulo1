var mensagem;




function zelda1(){
    while(mensagem != 1 || mensagem != 2){
        mensagem = prompt('O que fazer agora? \n \n 1 - Um óculos VR, é disso que o mercado precisa \n \n 2 - Vamos de 3D, me parece mais seguro');

        if (mensagem == 1){
            window.alert('Um oculos VR parece ser uma boa...');
            window.alert('Talvez seja a melhor escolha...');
            return window.location.href = './zelda4.html';
        }
        else if (mensagem == 2){
            document.getElementsByClassName('conteudo')[0].innerHTML=`<h1>Você Perdeu</h1>
            <img class="gifLose" src="../images/loser.webp" alt="">
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
setTimeout(zelda1, 3000);