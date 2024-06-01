import { Router } from "express";
import userRouter from "./usersRoutes";
import turnRouter from "./turnsRoutes";



const router: Router = Router();


router.use("/users", userRouter)
router.use("/appointments", turnRouter)



export default router;