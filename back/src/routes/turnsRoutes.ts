import { Router } from "express";

import auth from "../middlewares/auth";

import { createTurnController, getTurnController, getTurnsController, deleteTurnController } from "../controllers/turnController";

const turnRouter: Router = Router();

//TODO

turnRouter.get('/appointments', getTurnsController);
turnRouter.get('/appointments/:idturn', getTurnController);


turnRouter.post('/appointments/schedule', createTurnController);
turnRouter.delete('/appointments/:idturn', deleteTurnController);

export default turnRouter;
