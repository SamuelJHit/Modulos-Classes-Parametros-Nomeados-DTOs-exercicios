import { ProcessadorPix } from "./utils/banco.js";

console.log(" Teste Gate Way PIX e TAXAS ");

const processadorPix = new ProcessadorPix();

const resumoPix = processadorPix.processarCobranca({
    nomeEmpresa: "TechStore LTDA",
    valorTransacao: 1000,
    tipoChave: "CNPJ",
    ehClientePremium: true,
});

console.log(resumoPix);