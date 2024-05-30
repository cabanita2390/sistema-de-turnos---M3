import { Router } from "express";
import userRouter from "./usersRoutes";
import turnRouter from "./turnsRoutes";



const router: Router = Router();


router.use(userRouter)
router.use(turnRouter)



export default router;