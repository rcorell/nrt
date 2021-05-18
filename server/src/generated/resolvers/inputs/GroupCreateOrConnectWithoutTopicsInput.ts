import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupCreateWithoutTopicsInput } from "../inputs/GroupCreateWithoutTopicsInput";
import { GroupWhereUniqueInput } from "../inputs/GroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GroupCreateOrConnectWithoutTopicsInput {
  @TypeGraphQL.Field(_type => GroupWhereUniqueInput, {
    nullable: false
  })
  where!: GroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => GroupCreateWithoutTopicsInput, {
    nullable: false
  })
  create!: GroupCreateWithoutTopicsInput;
}
