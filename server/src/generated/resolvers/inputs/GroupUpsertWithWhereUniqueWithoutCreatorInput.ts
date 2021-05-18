import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupCreateWithoutCreatorInput } from "../inputs/GroupCreateWithoutCreatorInput";
import { GroupUpdateWithoutCreatorInput } from "../inputs/GroupUpdateWithoutCreatorInput";
import { GroupWhereUniqueInput } from "../inputs/GroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GroupUpsertWithWhereUniqueWithoutCreatorInput {
  @TypeGraphQL.Field(_type => GroupWhereUniqueInput, {
    nullable: false
  })
  where!: GroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => GroupUpdateWithoutCreatorInput, {
    nullable: false
  })
  update!: GroupUpdateWithoutCreatorInput;

  @TypeGraphQL.Field(_type => GroupCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: GroupCreateWithoutCreatorInput;
}
