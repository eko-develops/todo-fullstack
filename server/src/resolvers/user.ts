import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../entities/User";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    const users = await User.find();

    return users;
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
}
