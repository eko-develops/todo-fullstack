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
}
