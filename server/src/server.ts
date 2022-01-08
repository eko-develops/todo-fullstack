import "reflect-metadata";
import {createConnection} from "typeorm";
import { Todo } from "./entities/Todo";
import express from "express";
import cors from 'cors';

(async () => {

    await createConnection({
        type: "postgres",
        host: "localhost",
        username: "postgres",
        password: "123123",
        database: "todo_fullstack",
        entities: [Todo],
        synchronize: true
    });

    const app = express();
    app.use(express.json());
    app.use(cors());

    app.listen( 4000, () => {
        console.log(`connected to server on localhost:4000`);
    });

})();