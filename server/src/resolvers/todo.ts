import { Todo } from "../entities/Todo";
import { Arg, ID, Query, Resolver } from "type-graphql";

@Resolver()
export class TodoResolver {
  @Query(() => [Todo])
  async todos(): Promise<Todo[]> {
    const todos = await Todo.find();
    return todos;
  }

  @Query(() => Todo || undefined)
  async todo(@Arg("id", () => ID) id: number): Promise<Todo | undefined> {
    const todo = await Todo.findOne(id);

    return todo;
  }
}
