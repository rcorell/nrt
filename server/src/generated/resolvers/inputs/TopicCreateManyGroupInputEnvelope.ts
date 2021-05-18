import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateManyGroupInput } from "../inputs/TopicCreateManyGroupInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TopicCreateManyGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [TopicCreateManyGroupInput], {
    nullable: false
  })
  data!: TopicCreateManyGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
