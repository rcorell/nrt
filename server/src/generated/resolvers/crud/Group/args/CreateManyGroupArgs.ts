import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GroupCreateManyInput } from "../../../inputs/GroupCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGroupArgs {
  @TypeGraphQL.Field(_type => [GroupCreateManyInput], {
    nullable: false
  })
  data!: GroupCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
