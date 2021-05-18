import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupCreateNestedOneWithoutTopicsInput } from "../inputs/GroupCreateNestedOneWithoutTopicsInput";
import { UserCreateNestedOneWithoutTopicsInput } from "../inputs/UserCreateNestedOneWithoutTopicsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TopicCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTopicsInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutTopicsInput;

  @TypeGraphQL.Field(_type => GroupCreateNestedOneWithoutTopicsInput, {
    nullable: false
  })
  group!: GroupCreateNestedOneWithoutTopicsInput;
}
