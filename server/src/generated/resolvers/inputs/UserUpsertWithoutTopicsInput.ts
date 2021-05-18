import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTopicsInput } from "../inputs/UserCreateWithoutTopicsInput";
import { UserUpdateWithoutTopicsInput } from "../inputs/UserUpdateWithoutTopicsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutTopicsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTopicsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTopicsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTopicsInput, {
    nullable: false
  })
  create!: UserCreateWithoutTopicsInput;
}
