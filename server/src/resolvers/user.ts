import { Todo } from "../entities/Todo";
import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../entities/User";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    const users = await User.find({ relations: ["todos"] });

    return users;
  }

  @Query(() => User, { nullable: true })
  async user(
    @Arg("userId", () => ID) userId: number
  ): Promise<User | undefined> {
    const user = await User.findOne({ id: userId }, { relations: ["todos"] });

    console.log(user);

    return user;
  }

  @Mutation(() => Boolean)
  async createUser(
    @Arg("firstName", () => String) firstName: string,
    @Arg("lastName", () => String) lastName: string
  ): Promise<Boolean> {
    const newUser = User.create({
      firstName,
      lastName,
    });

    await User.save(newUser);

    return true;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("userId", () => ID) userId: number): Promise<Boolean> {
    await Todo.delete({ authorId: userId });
    await User.delete(userId);

    return true;
  }
}
