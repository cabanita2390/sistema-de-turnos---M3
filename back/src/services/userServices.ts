import ICreateUserDTO from "../dto/ICreateUserDTO";
import UserDTO from "../dto/ICreateUserDTO";
import IUser from "../interfaces/IUser"
import ICredential from "../interfaces/Icredential";
import { createNewCredential } from "./credentialServices";

let users: IUser[] = []

/*
    id: 10,
    name: 'Felipe',
    email: 'felipe@mail.com',
    birthdate: '23 08 1990',
    nDni: 105845632,
    credentialsId: 21,
 */


let id: number = 10 ;

export const getUsersService = async (): Promise<IUser[]> => {
    const allUsers: IUser[] = await users // Acá debería ir a consultar la BD
    return allUsers;
}

export const getUserService = async (id: number): Promise<IUser> => {
    console.log('id buscado: ', id);
    const user = users.find(user => user.id === id);

    if (!user) {
        
        throw new Error('User not found');
    }
    
    return user;
}

export const createUserService = async (createUserDTO: ICreateUserDTO): Promise<IUser>  => {

    const newCredential: ICredential = await createNewCredential({
        username: createUserDTO.username,
        password: createUserDTO.password
    });

    const newUser: IUser = {
        id: id++,
        name: createUserDTO.name,
        email: createUserDTO.email,
        birthdate: createUserDTO.birthdate,
        nDni: createUserDTO.nDni,
        credentialsId: newCredential.idCredential
    }
    
    users.push(newUser)
       
    return newUser

    // Recibir los datos del usuario, desde el ReportBody(?)
    // Crear un nuevo usuario
    // incluir el nuevo usuario en el arreglo
}



export const findUserByCredentialId = async (credentialId: number) => {
    
    const user: IUser | undefined = await users.find(user => user.credentialsId === credentialId)
    
    //Verificar si existe
    
    return user
}

 
export const deleteUserService = async (id: number): Promise<IUser[]> => {
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        throw new Error('User not found');
    }

    users.splice(userIndex, 1);
    return users;
}


