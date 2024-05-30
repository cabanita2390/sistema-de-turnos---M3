import { Router } from "express";

import auth from "../middlewares/auth";
import { createUserController, deleteUserController, getUserController, getUsersController } from "../controllers/usersController";

const userRouter: Router = Router();

userRouter.get('/users', auth, getUsersController)
userRouter.get('/users/:id', getUserController)

userRouter.post('/users/register', createUserController)

//TODO 
/* POST /users/login => Login del usuario a la aplicación.
*/

userRouter.delete('/users/:id', deleteUserController)

export default userRouter;