import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTopicArgs } from "./args/AggregateTopicArgs";
import { Topic } from "../../../models/Topic";
import { AggregateTopic } from "../../outputs/AggregateTopic";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Topic)
export class AggregateTopicResolver {
  @TypeGraphQL.Query(_returns => AggregateTopic, {
    nullable: false
  })
  async aggregateTopic(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTopicArgs): Promise<AggregateTopic> {
    return getPrismaFromContext(ctx).topic.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
