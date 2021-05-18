import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupCreateManyCreatorInput } from "../inputs/GroupCreateManyCreatorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GroupCreateManyCreatorInputEnvelope {
  @TypeGraphQL.Field(_type => [GroupCreateManyCreatorInput], {
    nullable: false
  })
  data!: GroupCreateManyCreatorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
