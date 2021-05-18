import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateWithoutGroupInput } from "../inputs/TopicCreateWithoutGroupInput";
import { TopicUpdateWithoutGroupInput } from "../inputs/TopicUpdateWithoutGroupInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TopicUpsertWithWhereUniqueWithoutGroupInput {
  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: false
  })
  where!: TopicWhereUniqueInput;

  @TypeGraphQL.Field(_type => TopicUpdateWithoutGroupInput, {
    nullable: false
  })
  update!: TopicUpdateWithoutGroupInput;

  @TypeGraphQL.Field(_type => TopicCreateWithoutGroupInput, {
    nullable: false
  })
  create!: TopicCreateWithoutGroupInput;
}
