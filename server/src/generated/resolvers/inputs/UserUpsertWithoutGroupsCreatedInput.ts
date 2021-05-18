import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutGroupsCreatedInput } from "../inputs/UserCreateWithoutGroupsCreatedInput";
import { UserUpdateWithoutGroupsCreatedInput } from "../inputs/UserUpdateWithoutGroupsCreatedInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutGroupsCreatedInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutGroupsCreatedInput, {
    nullable: false
  })
  update!: UserUpdateWithoutGroupsCreatedInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutGroupsCreatedInput, {
    nullable: false
  })
  create!: UserCreateWithoutGroupsCreatedInput;
}
