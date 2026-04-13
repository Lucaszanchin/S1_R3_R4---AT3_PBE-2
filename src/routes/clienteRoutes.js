import { Router } from "express";
import clienteController from "../controllers/clienteController.js";

const clienteRoutes = Router();

clienteRoutes.post('/', clienteController.incluirCliente);
clienteRoutes.put('/:id', clienteController.atualizarCliente);
clienteRoutes.delete('/:id', clienteController.excluirCliente);
clienteRoutes.get('/', clienteController.buscarTodosClientes);
clienteRoutes.get('/:id', clienteController.buscarClientePorID);

export default clienteRoutes;