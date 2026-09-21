import { GestorEmprestimos } from "./utils/biblioteca.js";

console.log(" Teste BIBLIOTECA DIGITAL ");

const gestoremprestimos = new GestorEmprestimos();

const resumoEmprestimo = gestoremprestimos.calcularPrazoDevolucao({
    tituloLivro: "Estruturas de Dados em TypeScript",
    diaPadrao: 14,
    ehEstudante: true,
    diasAtrasoAnterior: 3,
});

console.log(resumoEmprestimo);