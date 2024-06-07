import TurnDTO from "../dto/TurnDTO";
import Appointment from "../entities/Appointment";
import ITurn, { AppointmentStatus } from "../interfaces/ITurn";
import { appointmentModel } from "../repositories";

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

export const getTurnsService = async (): Promise<Appointment[]> => {

    const allAppointments: Appointment[] = await appointmentModel.find({
        //Incluir relaciones
    })
    return allAppointments;
}


export const getTurnService = async (numericidAppointment: number): Promise<Appointment> => {
    const appointment: Appointment | null = await appointmentModel.findOne({
        where: { idAppointment: numericidAppointment }
    })

    if (!appointment) {
        throw new Error('Turn not found');
    }
    
    return appointment;
}


export const createTurnService = async (appointmentData: TurnDTO): Promise<Appointment> => {
    try {
        const newDataAppointment = {
            userId: appointmentData.usuarioId,
            date: appointmentData.date,
            time: appointmentData.time,
            servicio: appointmentData.servicio
        };

        const newAppointment = appointmentModel.create(newDataAppointment);
        await appointmentModel.save(newAppointment);

        return newAppointment;
    } catch (error) {
        console.error('Error creating appointment:', error);
        throw new Error('Failed to create appointment');
    }
};

export const cancelTurnService = async (numericIdTurn: number): Promise<boolean> => {

    const appointment = await appointmentModel.findOne({
        where: { idAppointment: numericIdTurn }
    })

    if (!appointment) {
        throw new Error('Turno no encontrado');
    }

    if (appointment.statusActive === false) {
        throw new Error('Turno cancelado');
    }

    appointment.statusActive = false;
    
    await appointmentModel.save(appointment)

    return true;
}





