import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateWithoutGroupInput } from "../inputs/TopicCreateWithoutGroupInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TopicCreateOrConnectWithoutGroupInput {
  @TypeGraphQL.Field(_type => TopicWhereUniqueInput, {
    nullable: false
  })
  where!: TopicWhereUniqueInput;

  @TypeGraphQL.Field(_type => TopicCreateWithoutGroupInput, {
    nullable: false
  })
  create!: TopicCreateWithoutGroupInput;
}
