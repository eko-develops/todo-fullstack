"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Todo_1 = require("./entities/Todo");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const todo_1 = require("./resolvers/todo");
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, typeorm_1.createConnection)({
        type: "postgres",
        host: "localhost",
        username: "postgres",
        password: process.env.DATABASE_PASSWORD,
        database: "todo_fullstack",
        entities: [Todo_1.Todo],
        synchronize: true,
    });
    const app = (0, express_1.default)();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield (0, type_graphql_1.buildSchema)({
            resolvers: [todo_1.TodoResolver],
            validate: false,
        }),
    });
    yield apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.listen(4000, () => {
        console.log(`connected to server on localhost:4000`);
    });
}))();
//# sourceMappingURL=server.js.map