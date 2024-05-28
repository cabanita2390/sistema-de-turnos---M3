import { Router } from "express";
import { createUserController, deleteUserController, getUserController } from "../controllers/usersController";
import auth from "../middlewares/auth";



const router: Router = Router();

router.get('/users', auth, getUserController)

router.post('/users', createUserController)

router.delete('/users/:id', deleteUserController)

export default router;