import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateManyGroupInputEnvelope } from "../inputs/TopicCreateManyGroupInputEnvelope";
import { TopicCreateOrConnectWithoutGroupInput } from "../inputs/TopicCreateOrConnectWithoutGroupInput";
import { TopicCreateWithoutGroupInput } from "../inputs/TopicCreateWithoutGroupInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TopicCreateNestedManyWithoutGroupInput {
  @TypeGraphQL.Field(_type => [TopicCreateWithoutGroupInput], {
    nullable: true
  })
  create?: TopicCreateWithoutGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicCreateOrConnectWithoutGroupInput], {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => TopicCreateManyGroupInputEnvelope, {
    nullable: true
  })
  createMany?: TopicCreateManyGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  connect?: TopicWhereUniqueInput[] | undefined;
}
