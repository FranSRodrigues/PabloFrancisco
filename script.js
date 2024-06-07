class Filme{
    constructor(titulo, diretor, anoLancamento){
        this.titulo = titulo;
        this.diretor = diretor;
        this.anoLancamento = anoLancamento;
    }

    getTitulo(){
        return this.titulo;
    }

    setTitulo(novoTitulo){
        this.titulo = novoTitulo;
    }

    getDiretor(){
        return this.diretor;
    }

    setDiretor(novoDiretor){
        this.diretor = novoDiretor;
    }

    getAno(){
        return this.anoLancamento;
    }

    setAno(novoAno){
        this.anoLancamento = novoAno;
    }

    criarElementoVisualFilmes(){
        const exibicao = document.createElement("p");
        exibicao.innerHTML = this.titulo + " - " + this.diretor + " (" + this.anoLancamento + ")";
        return exibicao;
    }
}


let titulo = document.getElementById("titulo");
let diretor = document.getElementById("diretor");
let anoLancamento = document.getElementById("ano");

let addButton = document.getElementById("addButton");
let lista = document.getElementById("lista");

let filmes = [];

addButton.addEventListener("click", exibirDados)


function exibirDados(){

    let valorTitulo = titulo.value;
    let valorDiretor = diretor.value;
    let valorAnoLancamento = anoLancamento.value;

    if(valorTitulo == "" && valorDiretor == "" && valorAnoLancamento == ""){
        alert("Preencha as informações de todos os campos!");
    }
    
    else if(valorTitulo == "" && valorDiretor == ""){
        alert("Preencha as informações dos campos 1 e 2!");
    }

    else if(valorTitulo == "" && valorAnoLancamento == ""){
        alert("Preencha as informações dos campos 1 e 3!");
    }

    else if(valorDiretor == "" && valorAnoLancamento == ""){
        alert("Preencha as informações dos campos 2 e 3!");
    }

    else if(valorTitulo == ""){
        alert("Preencha as informações do campo 1!");
    }

    else if(valorDiretor == ""){
        alert("Preencha as informações do campo 2!");
    }

    else if(valorAnoLancamento == ""){
        alert("Preencha as informações do campo 3!");
    }

    else{(valorTitulo && valorDiretor && valorAnoLancamento)

        let filme = new Filme(valorTitulo, valorDiretor, valorAnoLancamento);
        filmes.push(filme);

        lista.appendChild(filme.criarElementoVisualFilmes())

        titulo.value = "";
        diretor.value = "";
        anoLancamento.value = "";
    }

}