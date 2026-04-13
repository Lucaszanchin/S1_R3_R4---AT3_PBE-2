import { Router } from "express";
const routes = Router();
import categoriaRoutes from "./categoriaRoutes.js";
import produtoRoutes from "./produto.Routes.js";
import clienteRoutes from "./clienteRoutes.js";
import telefoneRoutes from "./telefoneRoutes.js";

routes.use('/produtos', produtoRoutes)
routes.use('/categorias', categoriaRoutes)
routes.use('/clientes', clienteRoutes)
routes.use('/telefones', telefoneRoutes)

export default routes;
