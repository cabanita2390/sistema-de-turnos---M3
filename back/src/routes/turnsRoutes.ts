import { Router } from "express";

import auth from "../middlewares/auth";

import { createTurnController, getTurnController, getTurnsController, deleteTurnController } from "../controllers/turnController";
import authUser from "../middlewares/authUser";

const turnRouter: Router = Router();

//TODO

turnRouter.get('/', getTurnsController);
turnRouter.get('/:idturn', getTurnController);


turnRouter.post('/schedule', authUser, createTurnController);
turnRouter.delete('/:idturn', deleteTurnController);

export default turnRouter;
