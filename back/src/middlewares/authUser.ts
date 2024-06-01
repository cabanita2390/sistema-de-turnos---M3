import { NextFunction, Request, Response } from "express";


const authUser = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.headers;

    if (!username || !password) {
        return res.status(401).json({ message: "Credenciales no proporcionadas" });
    }

    // Verificar las credenciales
    if (username === "admin" && password === "1234") {
        // Credenciales válidas, pasar al siguiente middleware
        next();
    } else {
        // Credenciales inválidas, enviar respuesta de error
        res.status(401).json({ message: "Credenciales inválidas" });
    }
};

export default authUser;
