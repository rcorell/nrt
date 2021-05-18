import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateManyAuthorInput } from "../inputs/TopicCreateManyAuthorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TopicCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [TopicCreateManyAuthorInput], {
    nullable: false
  })
  data!: TopicCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
