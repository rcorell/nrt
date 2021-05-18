import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicWhereInput } from "../inputs/TopicWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TopicListRelationFilter {
  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  every?: TopicWhereInput | undefined;

  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  some?: TopicWhereInput | undefined;

  @TypeGraphQL.Field(_type => TopicWhereInput, {
    nullable: true
  })
  none?: TopicWhereInput | undefined;
}
