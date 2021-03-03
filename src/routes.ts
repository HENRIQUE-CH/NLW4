import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { PesquisaController } from "./controllers/PesquisaController";

const router = Router();

const userController = new UserController();
const pesquisaController = new PesquisaController();

router.post("/users", userController.create);
router.post("/pesquisa", pesquisaController.create);

router.get("/pesquisa", pesquisaController.show);

export { router };
