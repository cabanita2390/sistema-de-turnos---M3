import TurnDTO from "../dto/TurnDTO";
import ITurn from "../interfaces/ITurn";

let turns: ITurn[] = [
    {
        idTurns: 10,
        servicio: 'Atención',
        fechaCreacion: 'hoy',
        fechaEliminacion: "",
    },
    {
        idTurns: 11,
        servicio: 'Atención',
        fechaCreacion: 'ayer',
        fechaEliminacion: "",
    }
]

let idTurns: number = turns[1].idTurns +1 ;

export const getTurnsService = async (): Promise<ITurn[]> => {
    return turns;
}


export const getTurnService = async (numericIdTurn: number): Promise<ITurn> => {
    const turn = turns.find(turno => turno.idTurns === numericIdTurn);

    if (!turn) {
        
        throw new Error('Turn not found');
    }
    
    return turn;
}


export const createTurnService = async ( turnData: TurnDTO ) => {

    const newTurn: ITurn = {
        idTurns: idTurns,
        servicio: turnData.servicio,
        fechaCreacion: 'hoy',
        fechaEliminacion: '',
        usuarioId: turnData.usuarioId
    }

    turns.push(newTurn);
    
    idTurns++;

    return newTurn
}

export const deleteTurnService = async (numericIdTurn: number): Promise<ITurn[]> => {
    const turnIndex = turns.findIndex(turn => turn.idTurns === numericIdTurn);

    if (turnIndex === -1) {
        throw new Error('Turn not found');
    }

    turns.splice(turnIndex, 1);
    return turns;
}





