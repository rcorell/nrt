import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GroupWhereUniqueInput } from "../../../inputs/GroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteGroupArgs {
  @TypeGraphQL.Field(_type => GroupWhereUniqueInput, {
    nullable: false
  })
  where!: GroupWhereUniqueInput;
}
