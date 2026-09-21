import { GestorEstoque } from "./utils/estoque.js";

console.log(" CONTROLE DE ESTOQUE ");

const gestorEstoque = new GestorEstoque();

// Teste 1: Produto em nível crítico (Atual 5 <= Mínimo 10)
// objetivo = 20 un (10 * 2). faltam 15 un (20 - 5). com lote de 6, precisa de 3 lotes (15 / 6 = 2.5 -> 3 lotes).
const testeCritico = gestorEstoque.avaliarNecessidadeReposicao({
  nomeProduto: "Mouse Sem Fio",
  quantidadeAtual: 5,
  estoqueMinimo: 10,
  tamanhoLote: 6,
});

console.log(testeCritico);