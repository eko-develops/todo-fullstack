import { Todo } from "../entities/Todo";
import {
  Arg,
  Field,
  ID,
  InputType,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";

@InputType()
class CreateTodoInput {
  @Field()
  title: string;

  @Field(() => ID)
  authorId: number;

  @Field(() => String, { nullable: true, defaultValue: null })
  message?: string | null;

  @Field()
  priority: string;
}

@InputType()
class UpdateTodoInput {
  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => String, { nullable: true })
  message: string;
}

@Resolver()
export class TodoResolver {
  @Query(() => [Todo])
  async todos(): Promise<Todo[]> {
    const todos = await Todo.find();
    return todos;
  }

  @Query(() => Todo, { nullable: true })
  async todo(@Arg("id", () => ID) id: number): Promise<Todo | undefined> {
    const todo = await Todo.findOne(id);

    return todo;
  }

  @Mutation(() => Todo)
  async createTodo(
    @Arg("options", () => CreateTodoInput) options: CreateTodoInput
  ): Promise<Todo> {
    const newTodo = Todo.create({
      ...options,
    });

    await Todo.save(newTodo);

    return newTodo;
  }

  @Mutation(() => Boolean)
  async deleteTodo(@Arg("todoId", () => ID) todoId: number): Promise<Boolean> {
    await Todo.delete(todoId);

    return true;
  }

  @Mutation(() => Boolean)
  async updateTodo(
    @Arg("todoId", () => ID) todoId: number,
    @Arg("options", () => UpdateTodoInput) options: UpdateTodoInput
  ): Promise<Boolean> {
    await Todo.update({ id: todoId }, { ...options });

    return true;
  }
}
