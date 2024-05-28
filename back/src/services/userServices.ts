import UserDTO from "../dto/UserDTO";
import IUser from "../interfaces/IUser"

let users: IUser[] = [{
    id: 1,
    name: 'Felipe',
    email: 'felipe@mail.com',
    active: true
}]
let id: number = users[0].id +1 ;

export const createUserService = async (userData: UserDTO): Promise<IUser>  => {

    const newUser: IUser = {
        id: id,
        name: userData.name,
        email: userData.email,
        active: userData.active
    }
    
    users.push(newUser)
    id++;
    
    return newUser

    // Recibir los datos del usuario, desde el ReportBody(?)
    // Crear un nuevo usuario
    // incluir el nuevo usuario en el arreglo
}
export const getUserService = async (): Promise<IUser[]> => {
    return users;
}
 
export const deleteUserService = async (id: number): Promise<IUser[]> => {
    users = users.filter((user: IUser) => user.id !== id);
    return users;
}


