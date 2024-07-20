const alunos = [
    { nome: "Pedro", classe: "A", idade: 14 },
    { nome: "Maria", classe: "A", idade: 12 },
    { nome: "Marcos", classe: "B", idade: 15 },
    { nome: "Michel", classe: "A", idade: 13 },
    { nome: "Ana", classe: "B", idade: 11 },
    { nome: "Bruno", classe: "B", idade: 10 }
];

function alunoMaisVelhoTurmaA(alunos) {
    let alunoMaisVelhoA = { nome: "", idade: 0 };
    
    alunos.forEach(aluno => {
        if (aluno.classe === "A" && aluno.idade > alunoMaisVelhoA.idade) {
            alunoMaisVelhoA = aluno;
        }
    });
    return alunoMaisVelhoA;
}

function mediaIdadeAlunos(alunos) {
    let somaIdade = 0;
    
    alunos.forEach(aluno => {
        somaIdade += aluno.idade;
    });
    
    return somaIdade / alunos.length;
}

const maisVelhoA = alunoMaisVelhoTurmaA(alunos);
const mediaIdade = mediaIdadeAlunos(alunos);

console.log(`Nome do aluno mais velho da turma A: ${maisVelhoA.nome}, Idade: ${maisVelhoA.idade}`);
console.log(`A média de idade de todos os alunos é: ${mediaIdade}`);
