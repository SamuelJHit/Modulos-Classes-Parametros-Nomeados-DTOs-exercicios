import { CalculadoraDelivery } from "./utils/delivery.ts";

console.log("--- Teste de Delivery ---")
const calculadoraDelivery = new CalculadoraDelivery();

const resultadoDelivery = calculadoraDelivery.calcularEntrega({
    distanciaKm: 5,
    valorPedido: 100,
    estaChovendo: true,
});

console.log(resultadoDelivery)