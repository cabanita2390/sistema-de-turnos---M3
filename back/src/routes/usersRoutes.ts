import { Router } from "express";

import auth from "../middlewares/auth";
import { registerUserController, getUserController, getUsersController, loginUserController } from "../controllers/usersController";

const userRouter: Router = Router();

userRouter.get('/', getUsersController)
userRouter.get('/:id', getUserController)

userRouter.post('/register', registerUserController)
userRouter.post('/login', loginUserController)

//TODO 
/* POST /users/login => Login del usuario a la aplicación.
*/

// userRouter.delete('/:id', deleteUserController)

export default userRouter;