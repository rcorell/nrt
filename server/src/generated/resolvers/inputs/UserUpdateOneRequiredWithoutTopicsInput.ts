import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTopicsInput } from "../inputs/UserCreateOrConnectWithoutTopicsInput";
import { UserCreateWithoutTopicsInput } from "../inputs/UserCreateWithoutTopicsInput";
import { UserUpdateWithoutTopicsInput } from "../inputs/UserUpdateWithoutTopicsInput";
import { UserUpsertWithoutTopicsInput } from "../inputs/UserUpsertWithoutTopicsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutTopicsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTopicsInput, {
    nullable: true
  })
  create?: UserCreateWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTopicsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTopicsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTopicsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTopicsInput | undefined;
}
