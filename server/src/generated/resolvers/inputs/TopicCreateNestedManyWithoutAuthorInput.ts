import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateManyAuthorInputEnvelope } from "../inputs/TopicCreateManyAuthorInputEnvelope";
import { TopicCreateOrConnectWithoutAuthorInput } from "../inputs/TopicCreateOrConnectWithoutAuthorInput";
import { TopicCreateWithoutAuthorInput } from "../inputs/TopicCreateWithoutAuthorInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TopicCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [TopicCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: TopicCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TopicCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: TopicCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => TopicCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: TopicCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TopicWhereUniqueInput], {
    nullable: true
  })
  connect?: TopicWhereUniqueInput[] | undefined;
}
