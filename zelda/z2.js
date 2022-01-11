var mensagem;




function zelda1(){
    while(mensagem != 1 || mensagem != 2){
        mensagem = prompt('O que fazer agora? \n \n 1 - Contratar um coach \n \n 2 - Assistir live né? Mais facil...');

        if (mensagem == 2){
            window.alert('KKKK você vai só assistir live?');
            window.alert('Está de brincadeira né?');
            return window.location.href = './zelda3.html';
        }
        else if (mensagem == 1){
            window.alert('Contratar um coach?');
            window.alert('Eu esperava mais de você...');
            return window.location.href = './zelda3.html';
        }
        else{
            alert('Digite 1 ou 2');
        }
    }
}
setTimeout(zelda1, 3000);