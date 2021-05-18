import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupScalarWhereInput } from "../inputs/GroupScalarWhereInput";
import { GroupUpdateManyMutationInput } from "../inputs/GroupUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GroupUpdateManyWithWhereWithoutCreatorInput {
  @TypeGraphQL.Field(_type => GroupScalarWhereInput, {
    nullable: false
  })
  where!: GroupScalarWhereInput;

  @TypeGraphQL.Field(_type => GroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: GroupUpdateManyMutationInput;
}
