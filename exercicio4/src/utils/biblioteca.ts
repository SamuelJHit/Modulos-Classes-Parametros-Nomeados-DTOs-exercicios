// interface para parametros do método

export interface CalcularEmprestimoInput {
    tituloLivro: string;
    diaPadrao: number;
    ehEstudante: boolean;
    diasAtrasoAnterior: number;
}

// classe com regra de empréstimo
export class GestorEmprestimos {
    calcularPrazoDevolucao({
        tituloLivro,
        diaPadrao,
        ehEstudante,
        diasAtrasoAnterior,
    }: CalcularEmprestimoInput): string {
        //calcular os dias totais caso for estudante
        let diasTotais = diaPadrao;
        if(ehEstudante){
            diasTotais += 7
        }
        // e calcular o valor da multa se tiver atrasos
        let valorMulta = 0;
        if(diasAtrasoAnterior > 0){
            valorMulta = diasAtrasoAnterior * 2;
        }

        return `[BIBLIOTECA] Livro: "${tituloLivro}" | Prazo Total: ${diasTotais} dias | Pendência Multa: R$ ${valorMulta.toFixed(2)}`;
    }
}