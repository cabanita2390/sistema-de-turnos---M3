export enum AppointmentStatus {
    ACTIVE= "active",
    CANCELLED = "cancelled"
}


interface ITurn {
    idTurns: number,
    usuarioId: number, //Revisar más adelante de qué tipo debe ser
    date: string, //*fecha para la cual fue reservado el turno.  *Revisar más adelante de qué tipo debe ser
    time: string, //*hora para la cual fue reservado el turno.  *Revisar más adelante de qué tipo debe ser
    estadoActive: AppointmentStatus, //Revisar más adelante de qué tipo debe ser
    servicio: string,
}

export default ITurn;
