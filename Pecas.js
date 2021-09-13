// Contagem de Peças

const listaPecas = ["Placa-Mãe", "Memória", "Processador", "Video", "Rede", "Monitor", "Gabinete", "Teclado", "Fonte", "HDD"]
const pesoPeca = 101;

console.log ('Insira o nome da peça:')
if (listaPecas.length <=10) {
listaPecas.push ('SDD')
for(index = 10; index < listaPecas.length; index++) {
const nome = listaPecas[index];
if (nome.length >= 3) {
console.log (nome + ' -- Cadastrando...')
console.log ('Insira o peso da peça em (g): ')
if (pesoPeca >= 100) {
console.log (pesoPeca,'g')
console.log ('Cadastro de Peça efetuado com sucesso!')
console.log (listaPecas)
} else {
console.log (pesoPeca,'g')
console.log ('Peso menor que o permitido (100g)')
console.log ('Não foi possivel prosseguir com o cadastro.')
}
} else {
console.log (nome + ' -- Nome muito pequeno')
console.log ('Não foi possivel prosseguir com o cadastro.')
}
}
}
else {
console.log ('Quantidade de peças excedida (10)')
}