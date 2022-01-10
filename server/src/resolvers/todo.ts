import { Todo } from "../entities/Todo";
import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class TodoResolver {
  @Query(() => [Todo])
  async todos(): Promise<Todo[]> {
    const todos = await Todo.find();
    return todos;
  }

  @Query(() => Todo || undefined, { nullable: true })
  async todo(@Arg("id", () => ID) id: number): Promise<Todo | undefined> {
    const todo = await Todo.findOne(id);

    return todo;
  }

  @Mutation(() => Todo)
  async createTodo(
    @Arg("authorId", () => ID) authorId: number,
    @Arg("title", () => String) title: string,
    @Arg("message", () => String) message: string,
    @Arg("priority", () => String) priority: string
  ): Promise<Todo> {
    const newTodo = Todo.create({
      authorId,
      title,
      message,
      priority,
    });

    await Todo.save(newTodo);

    return newTodo;
  }
}
