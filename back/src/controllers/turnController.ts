import ITurn from "../interfaces/ITurn";


import { Request, Response } from "express"
import { createTurnService, deleteTurnService, getTurnService, getTurnsService } from "../services/turnsServices";
import TurnDTO from "../dto/TurnDTO";



export const getTurnsController = async (req: Request, res: Response) => {
    const turns: ITurn[] = await getTurnsService();
    res.status(200).json(turns)
} 

export const getTurnController = async (req: Request, res: Response) => {

    try {
        const { idturn } = req.params;
        const numericIdTurn = Number(idturn)

        if (isNaN(numericIdTurn)) {
            return res.status(400).json({ message: 'Invalid ID parameter' });
        }

        const turn: ITurn = await getTurnService(numericIdTurn);

        if (!turn) {
            return res.status(404).json({ message: 'Turn not found' });
        }

        res.status(200).json(turn);
    } catch (error) {
        
        res.status(500).json({ message: `${error}` });
    }
} 


export const createTurnController = async (req:Request , res:Response ) => {
    const { servicio, usuarioId } = req.body;
    console.log('servicio',servicio);
    console.log('usuarioId',usuarioId);
    const newTurn: ITurn = await createTurnService({ servicio, usuarioId })
    res.status(201).json(newTurn)
    
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











