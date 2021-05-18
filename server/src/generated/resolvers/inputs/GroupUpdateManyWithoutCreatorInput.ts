import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupCreateManyCreatorInputEnvelope } from "../inputs/GroupCreateManyCreatorInputEnvelope";
import { GroupCreateOrConnectWithoutCreatorInput } from "../inputs/GroupCreateOrConnectWithoutCreatorInput";
import { GroupCreateWithoutCreatorInput } from "../inputs/GroupCreateWithoutCreatorInput";
import { GroupScalarWhereInput } from "../inputs/GroupScalarWhereInput";
import { GroupUpdateManyWithWhereWithoutCreatorInput } from "../inputs/GroupUpdateManyWithWhereWithoutCreatorInput";
import { GroupUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/GroupUpdateWithWhereUniqueWithoutCreatorInput";
import { GroupUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/GroupUpsertWithWhereUniqueWithoutCreatorInput";
import { GroupWhereUniqueInput } from "../inputs/GroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GroupUpdateManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [GroupCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: GroupCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: GroupCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  upsert?: GroupUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => GroupCreateManyCreatorInputEnvelope, {
    nullable: true
  })
  createMany?: GroupCreateManyCreatorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GroupWhereUniqueInput], {
    nullable: true
  })
  connect?: GroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupWhereUniqueInput], {
    nullable: true
  })
  set?: GroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupWhereUniqueInput], {
    nullable: true
  })
  delete?: GroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true
  })
  update?: GroupUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true
  })
  updateMany?: GroupUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GroupScalarWhereInput[] | undefined;
}
