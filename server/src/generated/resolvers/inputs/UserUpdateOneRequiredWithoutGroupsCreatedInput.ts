import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutGroupsCreatedInput } from "../inputs/UserCreateOrConnectWithoutGroupsCreatedInput";
import { UserCreateWithoutGroupsCreatedInput } from "../inputs/UserCreateWithoutGroupsCreatedInput";
import { UserUpdateWithoutGroupsCreatedInput } from "../inputs/UserUpdateWithoutGroupsCreatedInput";
import { UserUpsertWithoutGroupsCreatedInput } from "../inputs/UserUpsertWithoutGroupsCreatedInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutGroupsCreatedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutGroupsCreatedInput, {
    nullable: true
  })
  create?: UserCreateWithoutGroupsCreatedInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutGroupsCreatedInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutGroupsCreatedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutGroupsCreatedInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutGroupsCreatedInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutGroupsCreatedInput, {
    nullable: true
  })
  update?: UserUpdateWithoutGroupsCreatedInput | undefined;
}
