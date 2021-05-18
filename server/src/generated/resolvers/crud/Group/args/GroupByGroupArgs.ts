import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GroupOrderByInput } from "../../../inputs/GroupOrderByInput";
import { GroupScalarWhereWithAggregatesInput } from "../../../inputs/GroupScalarWhereWithAggregatesInput";
import { GroupWhereInput } from "../../../inputs/GroupWhereInput";
import { GroupScalarFieldEnum } from "../../../../enums/GroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGroupArgs {
  @TypeGraphQL.Field(_type => GroupWhereInput, {
    nullable: true
  })
  where?: GroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GroupOrderByInput], {
    nullable: true
  })
  orderBy?: GroupOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "description" | "creatorId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => GroupScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GroupScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
