import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GroupWhereInput } from "../../../inputs/GroupWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGroupArgs {
  @TypeGraphQL.Field(_type => GroupWhereInput, {
    nullable: true
  })
  where?: GroupWhereInput | undefined;
}
