import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupCreateOrConnectWithoutUsersInput } from "../inputs/GroupCreateOrConnectWithoutUsersInput";
import { GroupCreateWithoutUsersInput } from "../inputs/GroupCreateWithoutUsersInput";
import { GroupScalarWhereInput } from "../inputs/GroupScalarWhereInput";
import { GroupUpdateManyWithWhereWithoutUsersInput } from "../inputs/GroupUpdateManyWithWhereWithoutUsersInput";
import { GroupUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/GroupUpdateWithWhereUniqueWithoutUsersInput";
import { GroupUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/GroupUpsertWithWhereUniqueWithoutUsersInput";
import { GroupWhereUniqueInput } from "../inputs/GroupWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GroupUpdateManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [GroupCreateWithoutUsersInput], {
    nullable: true
  })
  create?: GroupCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: GroupCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: GroupUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [GroupUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: GroupUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: GroupUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GroupScalarWhereInput[] | undefined;
}
