

import { Router } from "express";
import { inserirHeroi, listarHeroi } from "../Repository/SuperRepository";
const endpoints = Router();


endpoints.get('/superHeroi', async (req,resp) => {
    try{

        const r = await listarHerois();
        resp.send(r);

    }catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/superheroi', async (req,resp) => {
    try{

        const heroi = req.body;

        console.log()

        const r = await inserirHeroi(heroi);

        resp.send(r);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;