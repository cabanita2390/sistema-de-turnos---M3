import TurnDTO from "../dto/TurnDTO";
import ITurn from "../interfaces/ITurn";

let turns: ITurn[] = [{
    servicio: 'Atención',
    fechaCreacion: 'hoy',
    fechaEliminacion: "",
    idTurns: 10
}]

let idTurns: number = turns[0].idTurns +1 ;

export const getTurnsService = async (): Promise<ITurn[]> => {
    return turns;
}

export const createTurnService = async ( turnData: TurnDTO ) => {

    const newTurn: ITurn = {
        idTurns: idTurns,
        servicio: 'Atención',
        fechaCreacion: 'hoy',
        fechaEliminacion: '',
    }

    turns.push(newTurn);
    console.log(newTurn);

    idTurns++;

    return newTurn
}





