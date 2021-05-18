import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TopicUpdateManyMutationInput } from "../../../inputs/TopicUpdateManyMutationInput";
import { TopicWhereInput } from "../../../inputs/TopicWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTopicArgs {
  @TypeGraphQL.Field(_type => TopicUpdateManyMutationInput, {
    nullable: false
  })
  data!: TopicUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  where?: TopicWhereInput | undefined;
}
