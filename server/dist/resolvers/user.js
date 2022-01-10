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
exports.UserResolver = void 0;
const Todo_1 = require("../entities/Todo");
const type_graphql_1 = require("type-graphql");
const User_1 = require("../entities/User");
let UpdateUserInput = class UpdateUserInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "lastName", void 0);
UpdateUserInput = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateUserInput);
let UserResolver = class UserResolver {
    users() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User_1.User.find({ relations: ["todos"] });
            return users;
        });
    }
    user(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ id: userId }, { relations: ["todos"] });
            console.log(user);
            return user;
        });
    }
    createUser(firstName, lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = User_1.User.create({
                firstName,
                lastName,
            });
            yield User_1.User.save(newUser);
            return true;
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Todo_1.Todo.delete({ authorId: userId });
            yield User_1.User.delete(userId);
            return true;
        });
    }
    updateUser(userId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield User_1.User.update({ id: userId }, Object.assign({}, options));
            return true;
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    (0, type_graphql_1.Query)(() => User_1.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("userId", () => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("firstName", () => String)),
    __param(1, (0, type_graphql_1.Arg)("lastName", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("userId", () => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("userId", () => type_graphql_1.ID)),
    __param(1, (0, type_graphql_1.Arg)("options", () => UpdateUserInput)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map