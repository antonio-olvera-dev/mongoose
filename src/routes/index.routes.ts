import { Router } from "express";
import { indexController } from "../controllers/index.controller";
class IndexRoutes {
router:Router = Router();
    constructor() {
        
        this.router.get('/',indexController.index);
        this.router.post('/add',indexController.addStudent);
    }
}

export const indexRoutes = new IndexRoutes();