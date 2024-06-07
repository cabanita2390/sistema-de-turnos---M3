import { Router } from "express";

import auth from "../middlewares/auth";

import { createTurnController, getTurnController, getTurnsController, cancelTurnController } from "../controllers/turnController";
import authUser from "../middlewares/authUser";

const turnRouter: Router = Router();

//TODO

turnRouter.get('/', getTurnsController);
turnRouter.get('/:idappointment', getTurnController);


turnRouter.post('/schedule', createTurnController);
turnRouter.post('/:idappointment', cancelTurnController);

export default turnRouter;
