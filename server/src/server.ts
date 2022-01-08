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
    // const todo = Todo.create({title: "Testing"})
    // await Todo.save(todo);

})();