import { GerenciadorBatalha, ProcessarTurnoInput } from './utils/batalha'

const gerenciador = new GerenciadorBatalha();
// exemplo 1 golpe critico
const turno1: ProcessarTurnoInput = {
    nomeAtacante: "Paulin",
    nomeDefensor: "Jão Gomes",
    danoAtaque: 50,
    defesaDefensor: 30,
    ehGolpeCritico: true,
};

console.log(gerenciador.processarTurno(turno1));

// exemplo 2 ataque normal
const turno2: ProcessarTurnoInput = {
    nomeAtacante: "Jão Gomes",
    nomeDefensor: "Paulin",
    danoAtaque: 40,
    defesaDefensor: 35,
    ehGolpeCritico: false,
};

console.log(gerenciador.processarTurno(turno2));