import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGroupArgs } from "./args/AggregateGroupArgs";
import { Group } from "../../../models/Group";
import { AggregateGroup } from "../../outputs/AggregateGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Group)
export class AggregateGroupResolver {
  @TypeGraphQL.Query(_returns => AggregateGroup, {
    nullable: false
  })
  async aggregateGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGroupArgs): Promise<AggregateGroup> {
    return getPrismaFromContext(ctx).group.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
