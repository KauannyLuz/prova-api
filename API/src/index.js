import 'dotenv/config'

import controller from '../src/controller/SuperController.js'
import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());
server.use(controller);


server.listen(process.env.PORT, () =>
         console.log(` API conectada na porta ${process.env.PORT}`));

