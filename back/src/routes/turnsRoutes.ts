import { Router } from "express";

import auth from "../middlewares/auth";

import { createTurnController, getTurnsController } from "../controllers/turnController";

const turnRouter: Router = Router();

//TODO

turnRouter.get('/turns', getTurnsController);
turnRouter.post('/turns', createTurnController);
// turnRouter.delete('/turns/:id', deleteUserController);

export default turnRouter;
