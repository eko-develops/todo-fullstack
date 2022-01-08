import { Query, Resolver } from "type-graphql";

@Resolver()
export class TodoResolver {
  @Query(() => String)
  todo() {
    return "This is a todo";
  }
}
