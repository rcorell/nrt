import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateWithoutAuthorInput } from "../inputs/TopicCreateWithoutAuthorInput";
import { TopicUpdateWithoutAuthorInput } from "../inputs/TopicUpdateWithoutAuthorInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TopicUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: false
  })
  where!: TopicWhereUniqueInput;

  @TypeGraphQL.Field(_type => TopicUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: TopicUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => TopicCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: TopicCreateWithoutAuthorInput;
}
