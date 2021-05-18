import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupCreateOrConnectWithoutTopicsInput } from "../inputs/GroupCreateOrConnectWithoutTopicsInput";
import { GroupCreateWithoutTopicsInput } from "../inputs/GroupCreateWithoutTopicsInput";
import { GroupUpdateWithoutTopicsInput } from "../inputs/GroupUpdateWithoutTopicsInput";
import { GroupUpsertWithoutTopicsInput } from "../inputs/GroupUpsertWithoutTopicsInput";
import { GroupWhereUniqueInput } from "../inputs/GroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GroupUpdateOneRequiredWithoutTopicsInput {
  @TypeGraphQL.Field(_type => GroupCreateWithoutTopicsInput, {
    nullable: true
  })
  create?: GroupCreateWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => GroupCreateOrConnectWithoutTopicsInput, {
    nullable: true
  })
  connectOrCreate?: GroupCreateOrConnectWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => GroupUpsertWithoutTopicsInput, {
    nullable: true
  })
  upsert?: GroupUpsertWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => GroupWhereUniqueInput, {
    nullable: true
  })
  connect?: GroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GroupUpdateWithoutTopicsInput, {
    nullable: true
  })
  update?: GroupUpdateWithoutTopicsInput | undefined;
}
