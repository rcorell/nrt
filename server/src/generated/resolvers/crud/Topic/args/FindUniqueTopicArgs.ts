import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TopicWhereUniqueInput } from "../../../inputs/TopicWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTopicArgs {
  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: false
  })
  where!: TopicWhereUniqueInput;
}
