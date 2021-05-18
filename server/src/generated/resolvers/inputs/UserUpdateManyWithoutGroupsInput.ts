import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutGroupsInput } from "../inputs/UserCreateOrConnectWithoutGroupsInput";
import { UserCreateWithoutGroupsInput } from "../inputs/UserCreateWithoutGroupsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutGroupsInput } from "../inputs/UserUpdateManyWithWhereWithoutGroupsInput";
import { UserUpdateWithWhereUniqueWithoutGroupsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutGroupsInput";
import { UserUpsertWithWhereUniqueWithoutGroupsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutGroupsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateManyWithoutGroupsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutGroupsInput], {
    nullable: true
  })
  create?: UserCreateWithoutGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutGroupsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutGroupsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutGroupsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutGroupsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
