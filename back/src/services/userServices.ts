import ICreateUserDTO from "../dto/ICreateUserDTO";
import UserDTO from "../dto/ICreateUserDTO";
import Credential from "../entities/Credential";
import User from "../entities/User";
import IUser from "../interfaces/IUser"
import ICredential from "../interfaces/Icredential";
import { userModel } from "../repositories";
import { createNewCredential } from "./credentialServices";



export const getUsersService = async (): Promise<User[]> => {

    const allUsers: User[] = await userModel.find({
        // relations: {appointments: true}
    })

    return allUsers;
}

export const getUserService = async (id: number): Promise<User> => {
    
    const user: User | null = await userModel.findOne({
        where: { id: id },
        // relations: ["appointments"]
    })

    if (!user) {
        
        throw new Error('User not found');
    }
    
    return user;
}

export const createUserService = async (createUserDTO: ICreateUserDTO): Promise<User> => {
    try {
        // Creamos la credencial
        const newCredential = await createNewCredential({
            username: createUserDTO.username,
            password: createUserDTO.password
        });

        // Creamos el usuario
        const newUser = userModel.create(createUserDTO);

        // Asociamos la credencial al usuario
        newUser.credential = newCredential;

        // Guardamos el usuario con la credencial asociada
        await userModel.save(newUser);

        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user');
    }
};



export const findUserByCredentialId = async (credentialId: number) => {
    
    const user: User | null = await userModel.findOneBy({
        credential: {idCredential: credentialId }
    })
    
    if (!user) {   
        throw new Error('User not found');
    }

    return user
}

 
// export const deleteUserService = async (id: number): Promise<IUser[]> => {
//     const userIndex = users.findIndex(user => user.id === id);

//     if (userIndex === -1) {
//         throw new Error('User not found');
//     }

//     users.splice(userIndex, 1);
//     return users;
// }



//!Vamos a empezar prueba- Video minuto 58:55 04/06
