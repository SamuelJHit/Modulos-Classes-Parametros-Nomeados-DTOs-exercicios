// Interface para entrada de dados e seus métodos
export interface AvaliarEstoqueInput {
  nomeProduto: string;
  quantidadeAtual: number;
  estoqueMinimo: number;
  tamanhoLote: number;
}

// a classe gerenciadora do estoque
export class GestorEstoque {
  avaliarNecessidadeReposicao({
    nomeProduto,
    quantidadeAtual,
    estoqueMinimo,
    tamanhoLote,
  }: AvaliarEstoqueInput): string {
    
    // se a quantidade atual for menor ou igual ao mínimo, precisa repor
    if (quantidadeAtual <= estoqueMinimo) {

      const metaEstoque = estoqueMinimo * 2;
      const unidadesFaltantes = metaEstoque - quantidadeAtual;

      // a math.ceil garante que arredondamos para o lote completo acima
      const quantidadeLotes = Math.ceil(unidadesFaltantes / tamanhoLote);

      return `[ESTOQUE ALERTA] Produto: ${nomeProduto} | Atual: ${quantidadeAtual} | Sugestão de Compra: ${quantidadeLotes} lote(s)`;
    }

    return `[ESTOQUE OK] Produto: ${nomeProduto} | Nível seguro (${quantidadeAtual} un)`;
  }
}