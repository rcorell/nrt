import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTopicsInput } from "../inputs/UserCreateOrConnectWithoutTopicsInput";
import { UserCreateWithoutTopicsInput } from "../inputs/UserCreateWithoutTopicsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutTopicsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTopicsInput, {
    nullable: true
  })
  create?: UserCreateWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTopicsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
