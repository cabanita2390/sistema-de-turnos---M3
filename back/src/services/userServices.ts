import UserDTO from "../dto/UserDTO";
import IUser from "../interfaces/IUser"

let users: IUser[] = [{
        id: 10,
        name: 'Felipe',
        email: 'felipe@mail.com',
        active: true
    },
    {
        id: 20,
        name: 'Nicolas',
        email: 'nicolas@mail.com',
        active: true
    }
]
let id: number = users[0].id +1 ;

export const getUsersService = async (): Promise<IUser[]> => {
    return users;
}

export const getUserService = async (id: number): Promise<IUser> => {
    console.log('id buscado: ', id);
    const user = users.find(user => user.id === id);

    if (!user) {
        
        throw new Error('User not found');
    }
    
    return user;
}

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

 
export const deleteUserService = async (id: number): Promise<IUser[]> => {
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        throw new Error('User not found');
    }

    users.splice(userIndex, 1);
    return users;
}


