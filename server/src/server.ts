require("dotenv").config();
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Todo } from "./entities/Todo";
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { TodoResolver } from "./resolvers/todo";

(async () => {
  await createConnection({
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: process.env.DATABASE_PASSWORD,
    database: "todo_fullstack",
    entities: [Todo],
    synchronize: true,
  });

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TodoResolver],
      validate: false,
    }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.use(express.json());
  app.use(cors());

  app.listen(4000, () => {
    console.log(`connected to server on localhost:4000`);
  });
})();
