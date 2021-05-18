import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TopicUpdateInput } from "../../../inputs/TopicUpdateInput";
import { TopicWhereUniqueInput } from "../../../inputs/TopicWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTopicArgs {
  @TypeGraphQL.Field(_type => TopicUpdateInput, {
    nullable: false
  })
  data!: TopicUpdateInput;

  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: false
  })
  where!: TopicWhereUniqueInput;
}
