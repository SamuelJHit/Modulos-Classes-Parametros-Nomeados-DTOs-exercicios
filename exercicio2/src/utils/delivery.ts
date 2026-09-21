// definição da interface para os parâmetros do método
export interface CalcularTaxaInput { 
    distanciaKm: number, 
    valorPedido: number, 
    estaChovendo: boolean 
}

export class CalculadoraDelivery {
    calcularEntrega({ distanciaKm, valorPedido, estaChovendo }: 
        CalcularTaxaInput): string {
            let taxaFinal = 0;

            //regra da taxa de entrega
            if (valorPedido < 150) {
                taxaFinal = distanciaKm * 3;

                if (estaChovendo) {
                    taxaFinal += 5;
                }
            }

            //regra do tempo estimado
            let tempoMinutos = distanciaKm * 3;
            if(estaChovendo) {
                tempoMinutos += 15;
            }
            return`[DELIVERY] Taxa: R$ ${taxaFinal.toFixed(2)} | Tempo Estimado: ${tempoMinutos} min`;
        }
}