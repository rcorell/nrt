import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupCreateManyCreatorInputEnvelope } from "../inputs/GroupCreateManyCreatorInputEnvelope";
import { GroupCreateOrConnectWithoutCreatorInput } from "../inputs/GroupCreateOrConnectWithoutCreatorInput";
import { GroupCreateWithoutCreatorInput } from "../inputs/GroupCreateWithoutCreatorInput";
import { GroupWhereUniqueInput } from "../inputs/GroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GroupCreateNestedManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [GroupCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: GroupCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: GroupCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => GroupCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: GroupCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GroupWhereUniqueInput], {
    nullable: true
  })
  connect?: GroupWhereUniqueInput[] | undefined;
}
