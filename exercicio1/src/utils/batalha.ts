export interface CalcularDanoInput { 
    danoAtaque: number; 
    defesaDefensor: number; 
    ehGolpeCritico: boolean; 
}

export interface DeterminarTipoAtaqueInput {
    ehGolpeCritico: boolean;
}

export interface ProcessarTurnoInput {
    nomeAtacante: string; 
    nomeDefensor: string;
    danoAtaque: number;
    defesaDefensor: number;
    ehGolpeCritico: boolean;

}

export class GerenciadorBatalha {
    calcularDano({ danoAtaque, defesaDefensor, ehGolpeCritico }:
        CalcularDanoInput): number {
            const danoBase = ehGolpeCritico ? danoAtaque * 2 : danoAtaque;
            return danoBase > defesaDefensor ? danoBase - defesaDefensor : 0;
    }
    
    DeterminarTipoAtaque({ ehGolpeCritico }: DeterminarTipoAtaqueInput): string {
        return ehGolpeCritico ? "Crítico!" : "Ataque Normal";
    }

    processarTurno({
        nomeAtacante,
        nomeDefensor,
        danoAtaque,
        defesaDefensor,
        ehGolpeCritico,
    }: ProcessarTurnoInput): string {
        const danoAplicado = this.calcularDano({
            danoAtaque,
            defesaDefensor,
            ehGolpeCritico,
        });

        const tipoAtaque = this.DeterminarTipoAtaque({ ehGolpeCritico });

        return `[Batalha] ${nomeAtacante} atacou ${nomeDefensor} (${tipoAtaque}) -> Dano: ${danoAplicado} HP`;
    }
    
}
