import { Router } from "express";
const routes = Router();
import categoriaRoutes from "./categoriaRoutes.js";
import produtoRoutes from "./produto.Routes.js";
import clienteRoutes from "./clienteRoutes.js";

routes.use('/produtos', produtoRoutes)
routes.use('/categorias', categoriaRoutes)
routes.use('/clientes', clienteRoutes)

export default routes;
