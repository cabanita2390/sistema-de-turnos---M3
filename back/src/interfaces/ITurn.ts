
interface ITurn {
    idTurns: number,
    servicio: string,
    fechaCreacion: string | undefined, //Revisar más adelante de qué tipo debe ser
    fechaEliminacion: string | undefined, //Revisar más adelante de qué tipo debe ser
    usuarioId?: number, //Revisar más adelante de qué tipo debe ser
    estadoId?: number, //Revisar más adelante de qué tipo debe ser
}

export default ITurn;
