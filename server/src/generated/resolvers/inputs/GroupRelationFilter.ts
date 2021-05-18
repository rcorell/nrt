import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupWhereInput } from "../inputs/GroupWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GroupRelationFilter {
  @TypeGraphQL.Field(_type => GroupWhereInput, {
    nullable: true
  })
  is?: GroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => GroupWhereInput, {
    nullable: true
  })
  isNot?: GroupWhereInput | undefined;
}
