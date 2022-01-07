var mensagem;




function mario1(){
    while(mensagem != 1 || mensagem != 2){
        mensagem = prompt('O que fazer agora? \n \n 1 - Apostar no futuro 3D \n \n 2 - Lançar a braba no Metaverso');

        if (mensagem == 2){
            window.alert('Metaverso? Será que isso da certo?');
            window.alert('Mas vamos lá né...');
            return window.location.href = './mario4.html';
        }
        else if (mensagem == 1){
            document.getElementsByClassName('conteudo')[0].innerHTML=`<h1>Você Venceu</h1>
            <img class="gifLose" src="../images/m-w.gif" alt="">
            <p class= "descricao"> Apostou na tecnologia 3d, as vendas do jogo quadruplicaram em pouco tempo, salvando assim a franquia e com ela, o mundo nitendo</p>
            <p> Fim do jogo</p>
            <a href="../index.html"><button class='botao-gameover'>RECOMEÇAR</button></a>
        </main>`;
            break;
        }
        else{
            alert('Digite 1 ou 2');
        }
    }
}
setTimeout(mario1, 6000);