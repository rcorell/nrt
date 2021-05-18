import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateManyAuthorInputEnvelope } from "../inputs/TopicCreateManyAuthorInputEnvelope";
import { TopicCreateOrConnectWithoutAuthorInput } from "../inputs/TopicCreateOrConnectWithoutAuthorInput";
import { TopicCreateWithoutAuthorInput } from "../inputs/TopicCreateWithoutAuthorInput";
import { TopicScalarWhereInput } from "../inputs/TopicScalarWhereInput";
import { TopicUpdateManyWithWhereWithoutAuthorInput } from "../inputs/TopicUpdateManyWithWhereWithoutAuthorInput";
import { TopicUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/TopicUpdateWithWhereUniqueWithoutAuthorInput";
import { TopicUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/TopicUpsertWithWhereUniqueWithoutAuthorInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TopicUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [TopicCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: TopicCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: TopicUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => TopicCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: TopicCreateManyAuthorInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TopicUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: TopicUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: TopicUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TopicScalarWhereInput[] | undefined;
}
