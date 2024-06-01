import { Request, Response } from "express"
import IUser from "../interfaces/IUser";
import { createUserService, deleteUserService, findUserByCredentialId, getUserService, getUsersService } from "../services/userServices";
import ICredential from "../interfaces/Icredential";
import { validateCredential } from "../services/credentialServices";
import createCredentialDTO from "../dto/IcreateCredentialDTO";
import ICreateUserDTO from "../dto/ICreateUserDTO";


export const getUsersController = async (req: Request, res: Response) => {
    try {
        const users: IUser[] = await getUsersService();
        res.status(200).json(users)
        
    } catch (error) {
        res.status(400).json(error)
    }
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


export const registerUserController = async (req:Request<{}, {}, ICreateUserDTO> , res:Response ) => {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body; 
        
        const newUser: IUser = await createUserService({ name, email, birthdate, nDni, username, password})
        res.status(201).json(newUser)
    } catch (error: any) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Usuario inexistente', error: error.message });
    }
    
}


export const loginUserController = async (req:Request , res:Response ) => {  //<Params> <Query> <Body>
    //Icredential
    try {
        const { username, password } = req.body;
        const credential: ICredential = await validateCredential({username, password});
        
        
        const user = await findUserByCredentialId(credential.idCredential);
        
        if (!user) {
            return res.status(404).json({ login: false, message: 'User not found' });
        }
        res.status(200).json({login: true, user})

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ login: false, error: 'Contraseña incorrecta' });
    }
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











