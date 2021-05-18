import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicScalarWhereInput } from "../inputs/TopicScalarWhereInput";
import { TopicUpdateManyMutationInput } from "../inputs/TopicUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TopicUpdateManyWithWhereWithoutGroupInput {
  @TypeGraphQL.Field(_type => TopicScalarWhereInput, {
    nullable: false
  })
  where!: TopicScalarWhereInput;

  @TypeGraphQL.Field(_type => TopicUpdateManyMutationInput, {
    nullable: false
  })
  data!: TopicUpdateManyMutationInput;
}
