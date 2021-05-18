import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateManyGroupInputEnvelope } from "../inputs/TopicCreateManyGroupInputEnvelope";
import { TopicCreateOrConnectWithoutGroupInput } from "../inputs/TopicCreateOrConnectWithoutGroupInput";
import { TopicCreateWithoutGroupInput } from "../inputs/TopicCreateWithoutGroupInput";
import { TopicScalarWhereInput } from "../inputs/TopicScalarWhereInput";
import { TopicUpdateManyWithWhereWithoutGroupInput } from "../inputs/TopicUpdateManyWithWhereWithoutGroupInput";
import { TopicUpdateWithWhereUniqueWithoutGroupInput } from "../inputs/TopicUpdateWithWhereUniqueWithoutGroupInput";
import { TopicUpsertWithWhereUniqueWithoutGroupInput } from "../inputs/TopicUpsertWithWhereUniqueWithoutGroupInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TopicUpdateManyWithoutGroupInput {
  @TypeGraphQL.Field(_type => [TopicCreateWithoutGroupInput], {
    nullable: true
  })
  create?: TopicCreateWithoutGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicCreateOrConnectWithoutGroupInput], {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicUpsertWithWhereUniqueWithoutGroupInput], {
    nullable: true
  })
  upsert?: TopicUpsertWithWhereUniqueWithoutGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => TopicCreateManyGroupInputEnvelope, {
    nullable: true
  })
  createMany?: TopicCreateManyGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  connect?: TopicWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  set?: TopicWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TopicWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  delete?: TopicWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicUpdateWithWhereUniqueWithoutGroupInput], {
    nullable: true
  })
  update?: TopicUpdateWithWhereUniqueWithoutGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicUpdateManyWithWhereWithoutGroupInput], {
    nullable: true
  })
  updateMany?: TopicUpdateManyWithWhereWithoutGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TopicScalarWhereInput[] | undefined;
}
