import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TopicListRelationFilter } from "../inputs/TopicListRelationFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GroupWhereInput {
  @TypeGraphQL.Field(_type => [GroupWhereInput], {
    nullable: true
  })
  AND?: GroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupWhereInput], {
    nullable: true
  })
  OR?: GroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GroupWhereInput], {
    nullable: true
  })
  NOT?: GroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  creator?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  creatorId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  users?: UserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TopicListRelationFilter, {
    nullable: true
  })
  topics?: TopicListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
