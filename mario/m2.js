var mensagem;




function mario2(){
    while(mensagem != 1 || mensagem != 2){
        mensagem = prompt('O que fazer agora? \n \n 1 - Seguir em frente \n \n 2 - Pula nela, afinal é um Nintendo WII');

        if (mensagem == 1){
            window.alert('Mandou bem, vamos para a próxima fase');
            return window.location.href = './mario3.html';
        }
        else if (mensagem == 2){
            document.getElementsByClassName('conteudo')[0].innerHTML=`<h1>Você Perdeu</h1>
            <img class="gifLose" src="../images/m-t.gif" alt="">
            <p class= "descricao"> Desceu a porrada na tartaruga mas esqueceu do seu propósito. O mundo Nintendo precisava de você e você foi correr atrás de console??? Triste né?</p>
            <p> Tenta denovo. Você ja está pegando o jeito</p>
            <a href="../index.html"><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a>
        </main>`;
            break;
        }
        else{
            alert('Digite 1 ou 2');
        }
    }
}
setTimeout(mario2, 8000);