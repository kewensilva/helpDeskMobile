import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const routes = Router();

routes.get("/teste", (_, res) => {
    res.json("Olá DEV");
});

routes.post("/post", (req, res ) =>{
    // return res.status()
})

export default routes;