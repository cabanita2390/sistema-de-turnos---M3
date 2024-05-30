import { Request, Response } from "express"
import IUser from "../interfaces/IUser";
import { createUserService, deleteUserService, getUserService, getUsersService } from "../services/userServices";


export const getUsersController = async (req: Request, res: Response) => {
    const users: IUser[] = await getUsersService();
    res.status(200).json(users)
} 

export const getUserController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const numericId = Number(id);

        if (isNaN(numericId)) {
            return res.status(400).json({ message: 'Invalid ID parameter' });
        }

        const user: IUser | undefined = await getUserService(numericId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user', error });
    }
}


export const createUserController = async (req:Request , res:Response ) => {
    const { name, email, active } = req.body;
    const newUser: IUser = await createUserService({ name, email, active})
    res.status(201).json(newUser)
    
} 


export const deleteUserController = async (req: Request, res: Response) => {
    const { id } = req.params; // Debe ser 'id' no 'stringId'
        
    const numericId = Number(id);
        
    // Verificar si la conversión fue exitosa
    if (isNaN(numericId)) {
        return res.status(400).json({ message: 'Invalid ID parameter' });
    }

    try {
        const users: IUser[] = await deleteUserService(numericId);
        res.status(202).json(users);
    } catch (error) {
        res.status(500).json({ message: ` ${error} `});
    }
}











