import ITurn from "../interfaces/ITurn";
import IUser from "../interfaces/IUser";


import { Request, Response } from "express"
import { createTurnService, getTurnsService } from "../services/turnsServices";
import TurnDTO from "../dto/TurnDTO";



export const getTurnsController = async (req: Request, res: Response) => {
    const turns: ITurn[] = await getTurnsService();
    res.status(200).json(turns)
} 


export const createTurnController = async (req:Request , res:Response ) => {
    const { servicio, usuarioId } = req.body;
    const newTurn: ITurn = await createTurnService({ servicio, usuarioId })
    res.status(201).json(newTurn)
    
} 


// export const deleteUserController = async (req: Request, res: Response) => {
//     const { id } = req.params; // Debe ser 'id' no 'stringId'
    
//     console.log('ID from params:', id); // Verificar el valor recibido
//     console.log('Type before conversion:', typeof(id)); // Verificar el tipo de dato antes de la conversión
    
//     const numericId = Number(id);
    
//     console.log('Type after conversion:', typeof(numericId)); // Verificar el tipo de dato después de la conversión
//     console.log('Converted ID:', numericId); // Verificar el valor convertido
    
//     // Verificar si la conversión fue exitosa
//     if (isNaN(numericId)) {
//         return res.status(400).json({ message: 'Invalid ID parameter' });
//     }

//     try {
//         const users: IUser[] = await deleteUserService(numericId);
//         res.status(202).json(users);
//     } catch (error) {
//         res.status(500).json({ message: 'Error deleting user', error });
//     }
//}











