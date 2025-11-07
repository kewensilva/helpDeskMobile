import app from "../src/server/server";
import dotenv from "dotenv";
dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`servidor Iniciado em http://localhost:${process.env.PORT}`);
});