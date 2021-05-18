import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TopicOrderByInput } from "../../../inputs/TopicOrderByInput";
import { TopicScalarWhereWithAggregatesInput } from "../../../inputs/TopicScalarWhereWithAggregatesInput";
import { TopicWhereInput } from "../../../inputs/TopicWhereInput";
import { TopicScalarFieldEnum } from "../../../../enums/TopicScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTopicArgs {
  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  where?: TopicWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TopicOrderByInput], {
    nullable: true
  })
  orderBy?: TopicOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "description" | "authorId" | "groupId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => TopicScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TopicScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
