var mensagem;




function zelda1(){
    while(mensagem != 1 || mensagem != 2){
        mensagem = prompt('O que fazer agora? \n \n 1 - Não quero mudar!! \n \n 2 - Temos que mudar isso, urgente!');

        if (mensagem == 2){
            window.alert('Boa escolha, é sempre bom mudar um pouco né?');
            return window.location.href = './zelda2.html';
        }
        else if (mensagem == 1){
            document.getElementsByClassName('conteudo')[0].innerHTML=`<h1>Você Perdeu</h1>
            <img class="gifLose" src="../images/link-l.gif" alt="">
            <p class= "descricao"> Não mudar no mundo de hoje é como atirar no pé. Você continuou no erro, a franquia não se desenvolveu o suficiente e você não conseguiu salvar o mundo Nintendo</p>
            <p> Tenta denovo, uma melhoriazinha é sempre bem vinda né?</p>
            <a href="../index.html"><button class='botao-gameover'>RECOMEÇAR O JOGO</button></a>
        </main>`;
            break;
        }
        else{
            alert('Digite 1 ou 2');
        }
    }
}
setTimeout(zelda1, 6000);