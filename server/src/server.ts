import "reflect-metadata";
import {createConnection} from "typeorm";
import { Todo } from "./entities/Todo";

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

    console.log('hello world');
    // await Todo.create({title: "another", message: "A message", priority: "medium"}).save();
    // const todos = await Todo.find();
    // console.log(todos);
    
})();