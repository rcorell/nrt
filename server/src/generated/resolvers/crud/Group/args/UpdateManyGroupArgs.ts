import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GroupUpdateManyMutationInput } from "../../../inputs/GroupUpdateManyMutationInput";
import { GroupWhereInput } from "../../../inputs/GroupWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGroupArgs {
  @TypeGraphQL.Field(_type => GroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: GroupUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GroupWhereInput, {
    nullable: true
  })
  where?: GroupWhereInput | undefined;
}
