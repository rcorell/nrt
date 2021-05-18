import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutGroupsInput } from "../inputs/UserCreateOrConnectWithoutGroupsInput";
import { UserCreateWithoutGroupsInput } from "../inputs/UserCreateWithoutGroupsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedManyWithoutGroupsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutGroupsInput], {
    nullable: true
  })
  create?: UserCreateWithoutGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutGroupsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutGroupsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
