import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupCreateWithoutTopicsInput } from "../inputs/GroupCreateWithoutTopicsInput";
import { GroupUpdateWithoutTopicsInput } from "../inputs/GroupUpdateWithoutTopicsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GroupUpsertWithoutTopicsInput {
  @TypeGraphQL.Field(_type => GroupUpdateWithoutTopicsInput, {
    nullable: false
  })
  update!: GroupUpdateWithoutTopicsInput;

  @TypeGraphQL.Field(_type => GroupCreateWithoutTopicsInput, {
    nullable: false
  })
  create!: GroupCreateWithoutTopicsInput;
}
