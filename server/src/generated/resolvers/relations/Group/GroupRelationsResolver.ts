import * as TypeGraphQL from "type-graphql";
import { Group } from "../../../models/Group";
import { Topic } from "../../../models/Topic";
import { User } from "../../../models/User";
import { GroupTopicsArgs } from "./args/GroupTopicsArgs";
import { GroupUsersArgs } from "./args/GroupUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Group)
export class GroupRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async creator(@TypeGraphQL.Root() group: Group, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).group.findUnique({
      where: {
        id: group.id,
      },
    }).creator({});
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() group: Group, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GroupUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).group.findUnique({
      where: {
        id: group.id,
      },
    }).users(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Topic], {
    nullable: false
  })
  async topics(@TypeGraphQL.Root() group: Group, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GroupTopicsArgs): Promise<Topic[]> {
    return getPrismaFromContext(ctx).group.findUnique({
      where: {
        id: group.id,
      },
    }).topics(args);
  }
}
