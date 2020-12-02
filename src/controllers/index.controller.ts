import { Request, Response } from "express";
import mongoose from "mongoose";
import { student } from "../models/student.model";
import { db } from "./../databases";


class IndexController {


    constructor() { }

    async index(req: Request, res: Response) {
        try {
            await mongoose.connect(db.dbcloud, db.dbdeprecado);
            const studentlist = await student.find();
            console.log(studentlist);
            res.send(studentlist);
        } catch (error) {
            console.log(error);
            res.sendStatus(501);
        }
    }



    async addStudent(req: Request, res: Response) {

        try {
            await mongoose.connect(db.dbcloud, db.dbdeprecado);
            const newstudent = new student({
                nombre:'Antonio',
                edad:25,
                curso:'Neoland',
                altura: 186545653
            });
            await newstudent.save();
            res.send('Estudiante añadido')

        } catch (error) {
            console.log(error);
            res.sendStatus(501);
        }
    }


}

export const indexController = new IndexController();