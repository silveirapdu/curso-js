var nome;

console.log(nome);

sobreNome = null;
console.log(sobreNome);

console.log(nome == sobreNome);
console.log(nome === sobreNome);

var pessoa = {
    nome: "Cleverson Vieira Silveira",
    Profissao: "Consultor JavaScript"
};

console.log(pessoa.nome, " ", pessoa.Profissao, pessoa.idade);

var a=100, b=210;
function soma(a,b) {
    return a+b;
}

console.log(soma(a,b));