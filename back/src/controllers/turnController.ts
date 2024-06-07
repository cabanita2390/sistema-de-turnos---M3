import ITurn from "../interfaces/ITurn";


import { Request, Response } from "express"
import { createTurnService, deleteTurnService, getTurnService, getTurnsService } from "../services/turnsServices";
import TurnDTO from "../dto/TurnDTO";
import Appointment from "../entities/Appointment";



export const getTurnsController = async (req: Request, res: Response) => {
    // const turns: ITurn[] = await getTurnsService();
    // res.status(200).json(turns)

    try {
        const turns: Appointment[] = await getTurnsService();
        res.status(200).json(turns)
    } catch (error) {
        
    }
} 

export const getTurnController = async (req: Request, res: Response) => {

    try {
        const { idAppointment } = req.params;
        const numericidAppointment = Number(idAppointment)

        if (isNaN(numericidAppointment)) {
            return res.status(400).json({ message: 'Invalid ID parameter' });
        }

        const turn: Appointment | null = await getTurnService(numericidAppointment);

        if (!turn) {
            return res.status(404).json({ message: 'Turn not found' });
        }

        res.status(200).json(turn);
    } catch (error) {
        
        res.status(500).json({ message: `${error}` });
    }
} 


export const createTurnController = async (req:Request , res:Response ) => {
    
    try {
        const { servicio, usuarioId, date, time } = req.body;
            
        const newAppointment: Appointment = await createTurnService({ servicio, usuarioId, date, time })
        res.status(201).json(newAppointment)

    } catch (error) {
        console.error('Error creating appointment:', error);
        res.status(500).json({  error }); 
    }
    
} 


export const deleteTurnController = async (req: Request, res: Response) => {
    const { idturn } = req.params; // Debe ser 'id' no 'stringId'
        
    const numericIdTurn = Number(idturn);
        
    // Verificar si la conversión fue exitosa
    if (isNaN(numericIdTurn)) {
        return res.status(400).json({ message: 'Invalid ID parameter' });
    }

    try {
        const turns: ITurn[] = await deleteTurnService(numericIdTurn);
        res.status(202).json(turns);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting turn', error });
    }
}











