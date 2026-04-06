import { Router } from "express";
const routes = Router();
import categoriaRoutes from "./categoriaRoutes.js";
import produtoRoutes from "./produto.Routes.js";

routes.use('/produtos', produtoRoutes)
routes.use('/categorias', categoriaRoutes)

export default routes;
