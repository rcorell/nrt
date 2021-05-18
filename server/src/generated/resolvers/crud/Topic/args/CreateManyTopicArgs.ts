import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TopicCreateManyInput } from "../../../inputs/TopicCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTopicArgs {
  @TypeGraphQL.Field(_type => [TopicCreateManyInput], {
    nullable: false
  })
  data!: TopicCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
