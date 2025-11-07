import { Router } from "express";

const routes = Router();

routes.get("/teste", (_, res) => {
    res.json("Olá DEV");
});

export default routes;