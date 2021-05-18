import * as TypeGraphQL from "type-graphql";
import { Group } from "../../../models/Group";
import { Topic } from "../../../models/Topic";
import { User } from "../../../models/User";
import { UserGroupsArgs } from "./args/UserGroupsArgs";
import { UserGroupsCreatedArgs } from "./args/UserGroupsCreatedArgs";
import { UserTopicsArgs } from "./args/UserTopicsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Topic], {
    nullable: false
  })
  async topics(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTopicsArgs): Promise<Topic[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).topics(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Group], {
    nullable: false
  })
  async groupsCreated(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserGroupsCreatedArgs): Promise<Group[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).groupsCreated(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Group], {
    nullable: false
  })
  async groups(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserGroupsArgs): Promise<Group[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).groups(args);
  }
}
