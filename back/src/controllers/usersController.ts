import IUser from "../interfaces/IUser";
import { createUserService, deleteUserService, getUserService } from "../services/userServices"

import { Request, Response } from "express"




export const createUserController = async (req:Request , res:Response ) => {
    const { name, email, active } = req.body;
    const newUser: IUser = await createUserService({ name, email, active } )
    res.status(201).json(newUser)
    
} 

export const getUserController = async (req: Request, res: Response) => {
    const users: IUser[] = await getUserService();
    res.status(200).json(users)
} 

export const deleteUserController = async (req: Request, res: Response) => {
    const { id } = req.params; // Debe ser 'id' no 'stringId'
    
    console.log('ID from params:', id); // Verificar el valor recibido
    console.log('Type before conversion:', typeof(id)); // Verificar el tipo de dato antes de la conversión
    
    const numericId = Number(id);
    
    console.log('Type after conversion:', typeof(numericId)); // Verificar el tipo de dato después de la conversión
    console.log('Converted ID:', numericId); // Verificar el valor convertido
    
    // Verificar si la conversión fue exitosa
    if (isNaN(numericId)) {
        return res.status(400).json({ message: 'Invalid ID parameter' });
    }

    try {
        const users: IUser[] = await deleteUserService(numericId);
        res.status(202).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
}











