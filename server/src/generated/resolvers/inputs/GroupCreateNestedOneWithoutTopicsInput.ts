import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupCreateOrConnectWithoutTopicsInput } from "../inputs/GroupCreateOrConnectWithoutTopicsInput";
import { GroupCreateWithoutTopicsInput } from "../inputs/GroupCreateWithoutTopicsInput";
import { GroupWhereUniqueInput } from "../inputs/GroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GroupCreateNestedOneWithoutTopicsInput {
  @TypeGraphQL.Field(_type => GroupCreateWithoutTopicsInput, {
    nullable: true
  })
  create?: GroupCreateWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => GroupCreateOrConnectWithoutTopicsInput, {
    nullable: true
  })
  connectOrCreate?: GroupCreateOrConnectWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => GroupWhereUniqueInput, {
    nullable: true
  })
  connect?: GroupWhereUniqueInput | undefined;
}
