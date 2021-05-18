import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TopicOrderByInput } from "../../../inputs/TopicOrderByInput";
import { TopicWhereInput } from "../../../inputs/TopicWhereInput";
import { TopicWhereUniqueInput } from "../../../inputs/TopicWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTopicArgs {
  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  where?: TopicWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TopicOrderByInput], {
    nullable: true
  })
  orderBy?: TopicOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: true
  })
  cursor?: TopicWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
