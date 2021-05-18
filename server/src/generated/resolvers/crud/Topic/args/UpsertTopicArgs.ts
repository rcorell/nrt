import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TopicCreateInput } from "../../../inputs/TopicCreateInput";
import { TopicUpdateInput } from "../../../inputs/TopicUpdateInput";
import { TopicWhereUniqueInput } from "../../../inputs/TopicWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTopicArgs {
  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: false
  })
  where!: TopicWhereUniqueInput;

  @TypeGraphQL.Field(_type => TopicCreateInput, {
    nullable: false
  })
  create!: TopicCreateInput;

  @TypeGraphQL.Field(_type => TopicUpdateInput, {
    nullable: false
  })
  update!: TopicUpdateInput;
}
