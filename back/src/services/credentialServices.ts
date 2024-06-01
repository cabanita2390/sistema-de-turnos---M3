import UserDTO from "../dto/ICreateUserDTO";
import createCredentialDTO from "../dto/IcreateCredentialDTO";
import ICredential from "../interfaces/Icredential";

const credentials: ICredential[] = [] //Base de datos de credenciales
let credentialId: number = 20;


export const createNewCredential = async (createCredentialDTO: createCredentialDTO): Promise<ICredential> => {

       
    const newCredential: ICredential = {
        idCredential: credentialId,
        username: createCredentialDTO.username,
        password: createCredentialDTO.password
    }
    credentialId++

    credentials.push(newCredential)
    
    return newCredential

}


export const validateCredential = async (validateCredentialDTO: createCredentialDTO): Promise<ICredential> => { //Acá hay un error
    
    const { username, password } = validateCredentialDTO;

    const foundCredential = credentials.find(credential => credential.username === username)
    

    if (!foundCredential) throw Error('User not found')
    if (password !== foundCredential?.password) throw Error('Password incorrect')

    return foundCredential
    
}
