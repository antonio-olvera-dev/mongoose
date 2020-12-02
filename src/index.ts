import express from "express";
import cors from "cors";
import { indexRoutes } from "./routes/index.routes";
const app = express();
app.use(cors());
app.use(express.json());

app.set('port',3000);
app.use('/pruebas',indexRoutes.router)

app.listen(app.get('port'),()=>{

    console.log(`http://localhost:${app.get('port')}`);
    

});