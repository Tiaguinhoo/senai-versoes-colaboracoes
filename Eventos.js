// Evento dia 15/09/2021

const listadeParticipantes = ['Tiago', 'Miryan', 'Adriana', 'Rafael', 'Neto', 'Phelipe', 'Diego', 'Mariana', 'Milena'];
const DataEvento = 15/09/2021

console.log('Insira a data de inscrição:')
    let data = 13/09/2021;
if (data <= DataEvento) {
    console.log ('Inscrição em Andamento')

    console.log ('Insira sua idade')
        let idade = 18;
    if (idade >= 18) {
        console.log ('Prosseguindo com a inscrição')

        console.log ('Insira seu nome')
        listadeParticipantes.push('Maria')
            let quantidadeDeParticipantes = listadeParticipantes.length;
        if (quantidadeDeParticipantes <= 100) {
            console.log ('Cadastro realizado com sucesso!')

                console.log (listadeParticipantes)
            console.log (quantidadeDeParticipantes, ' até o momento')
        }
        else {
            console.log ('Limite de Participantes excedido. (100)')
        }
    }
    else {
        console.log ('Cadastro não é permitido pela idade')
    }    
}
else {
    console.log ('Cadastro não permitido por data invalida.')
}