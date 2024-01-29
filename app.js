let listaDeNunmerosSorteados = []; // lista e criada colocando [] e sepando os elementos da lista com , e colocando "" os itens da lista exemlo: let frutas = ["Maçã", "Uva", "Laranja"]; 
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//let titulo = document.querySelector('h1'); // selecionou a linha 22 do arquivo html
//titulo.innerHTML = 'Jogo do número secreto';
//let paragrafo = document.querySelector("p");// selecionou a linha 23 do arquivo html
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10!';
// AS 4 LINHAS acima , podem ser escrido de uma maneira melhor demonstrado nas linhas segintes
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); // linha 7 
}

// função exibir mensagem inicial
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogodo número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

//função de verificar chute
function verificarChute() { // refere a função da linha 27 do arquivo html
    let chute = document.querySelector('input').value; // linha 25 hmtl
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ?  'tentativas' : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); // linha 28 hmtl-
    
    } else {
        if(chute > numeroSecreto ) {
            exibirTextoNaTela('p', 'O número secreto é menor!');    
            } else {
                exibirTextoNaTela('p', `O número secreto é maior que ${chute}!`);    
            }
            tentativas++;
            limparCampo();
    }

}
// função gerar numero aleatorio
function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quanttidadeDeElementosNaLista = listaDeNunmerosSorteados.length; // length mostra a quantidade de itens da lista
    if (quanttidadeDeElementosNaLista == numeroLimite){
        listaDeNunmerosSorteados =  []; // ao sortear todos numeros da lista a lista limpa 
    } 
    if(listaDeNunmerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNunmerosSorteados.push(numeroEscolhido); // push adiciona o numero sorteado na lista
        //console.log(listaDeNunmerosSorteados);
        return numeroEscolhido;
    }

}

// função para limpar o campo que digitou
function limparCampo() { 
    chute = document.querySelector('input'); 
    chute.value = ' ';
}

//função para reinicializar jogo
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}