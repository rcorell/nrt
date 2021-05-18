import * as TypeGraphQL from "type-graphql";
import { Group } from "../../../models/Group";
import { Topic } from "../../../models/Topic";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Topic)
export class TopicRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() topic: Topic, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).topic.findUnique({
      where: {
        id: topic.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => Group, {
    nullable: false
  })
  async group(@TypeGraphQL.Root() topic: Topic, @TypeGraphQL.Ctx() ctx: any): Promise<Group> {
    return getPrismaFromContext(ctx).topic.findUnique({
      where: {
        id: topic.id,
      },
    }).group({});
  }
}
