import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TopicCreateInput } from "../../../inputs/TopicCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTopicArgs {
  @TypeGraphQL.Field(_type => TopicCreateInput, {
    nullable: false
  })
  data!: TopicCreateInput;
}
