import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupCreateOrConnectWithoutUsersInput } from "../inputs/GroupCreateOrConnectWithoutUsersInput";
import { GroupCreateWithoutUsersInput } from "../inputs/GroupCreateWithoutUsersInput";
import { GroupWhereUniqueInput } from "../inputs/GroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GroupCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [GroupCreateWithoutUsersInput], {
    nullable: true
  })
  create?: GroupCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: GroupCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupWhereUniqueInput], {
    nullable: true
  })
  connect?: GroupWhereUniqueInput[] | undefined;
}
