"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoResolver = void 0;
const Todo_1 = require("../entities/Todo");
const type_graphql_1 = require("type-graphql");
let CreateTodoInput = class CreateTodoInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTodoInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], CreateTodoInput.prototype, "authorId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true, defaultValue: null }),
    __metadata("design:type", Object)
], CreateTodoInput.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTodoInput.prototype, "priority", void 0);
CreateTodoInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateTodoInput);
let TodoResolver = class TodoResolver {
    todos() {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield Todo_1.Todo.find();
            return todos;
        });
    }
    todo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield Todo_1.Todo.findOne(id);
            return todo;
        });
    }
    createTodo(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const newTodo = Todo_1.Todo.create(Object.assign({}, options));
            yield Todo_1.Todo.save(newTodo);
            return newTodo;
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Todo_1.Todo]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "todos", null);
__decorate([
    (0, type_graphql_1.Query)(() => Todo_1.Todo, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "todo", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Todo_1.Todo),
    __param(0, (0, type_graphql_1.Arg)("options", () => CreateTodoInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTodoInput]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "createTodo", null);
TodoResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], TodoResolver);
exports.TodoResolver = TodoResolver;
//# sourceMappingURL=todo.js.map