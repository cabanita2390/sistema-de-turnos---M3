import TurnDTO from "../dto/TurnDTO";
import ITurn, { AppointmentStatus } from "../interfaces/ITurn";

let turns: ITurn[] = [
    {
        idTurns: 10,
        servicio: 'Atención',
        date: '31 05 2024',
        time: "8 am",
        usuarioId: 10,
        estadoActive: AppointmentStatus.ACTIVE
    },
    {
        idTurns: 11,
        servicio: 'Caja',
        date: '1 06 2024',
        time: "10 am",
        usuarioId: 11,
        estadoActive: AppointmentStatus.ACTIVE
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

    console.log('Desde turnServices, turnData', turnData); 

    const newTurn: ITurn = {
        idTurns: idTurns,
        servicio: turnData.servicio,
        date: turnData.date,
        time: turnData.time,
        usuarioId: turnData.usuarioId,
        estadoActive: AppointmentStatus.ACTIVE
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





