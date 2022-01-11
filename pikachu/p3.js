var mensagem;




function pikachu3(){
    while(mensagem != 1 || mensagem != 2){
        mensagem = prompt('O que fazer agora? \n \n 1 - Ir sozinho mesmo, eu me garanto. \n \n 2 - Chamar o treinador');

        if (mensagem == 2){
            window.alert('Chamar o treinador??');
            window.alert('Mas você tem pouco tempo...');
            window.alert('Tudo bem, vamos la né...');
            return window.location.href = './pikachu4.html';
        }
        else if (mensagem == 1){
            document.getElementsByClassName('conteudo')[0].innerHTML=`<h1>Você Perdeu</h1>
            <img class="gifLose" src="../images/pikachu-lose.gif" alt="">
            <p class= "descricao">Da onde você tirou que poderia enfrentar um Gyarados e um Rhydon sozinhx?? Você entrou na porrada, ficou feio pra você...</p>
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
setTimeout(pikachu3, 3000);

