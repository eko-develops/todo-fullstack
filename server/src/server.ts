import {createConnection} from "typeorm";

(async () => {

    const connection = await createConnection({
        type: "postgres",
        host: "localhost",
        username: "postgres",
        password: "123123",
        database: "todo_fullstack",
        entities: []
    });

    console.log('hello world');

})();