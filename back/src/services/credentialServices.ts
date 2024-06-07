import IValidateCredentialDTO from "../dto/IValidateCredentialDTO";
import createCredentialDTO from "../dto/IcreateCredentialDTO";
import Credential from "../entities/Credential";
import { credentialModel } from "../repositories";



export const createNewCredential = async (createCredentialDTO: createCredentialDTO): Promise<Credential> => {
    
    //*Crear Credencial
    const newCredential: Credential = credentialModel.create(createCredentialDTO)
    
    //*Grabar en BD

    await credentialModel.save(newCredential)

    return newCredential

}


export const validateCredential = async (validateCredentialDTO: IValidateCredentialDTO): Promise<Credential> => { //Acá hay un error
    
    const { username, password } = validateCredentialDTO;
    
    const foundCredential: Credential | null = await credentialModel.findOneBy({
        username
        })

        
    // credentials.find(credential => credential.username === username)
    

    if (!foundCredential) throw Error('Credenciales incorrectas')
    if (password !== foundCredential?.password) throw Error('Credenciales incorrectas')

    return foundCredential
    
}
