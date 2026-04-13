import { Router } from "express";
import telefoneController from "../controllers/telefoneController.js";

const telefoneRoutes = Router();

telefoneRoutes.post('/', telefoneController.incluirTelefone);
telefoneRoutes.put('/:id', telefoneController.atualizarTelefone);
telefoneRoutes.delete('/:id', telefoneController.excluirCliente);
telefoneRoutes.get('/', telefoneController.buscarTodosTelefones);
telefoneRoutes.get('/:id', telefoneController.buscarTelefonePorID);

export default telefoneRoutes;