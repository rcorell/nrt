import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TopicCreateNestedManyWithoutGroupInput } from "../inputs/TopicCreateNestedManyWithoutGroupInput";
import { UserCreateNestedOneWithoutGroupsCreatedInput } from "../inputs/UserCreateNestedOneWithoutGroupsCreatedInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GroupCreateWithoutUsersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutGroupsCreatedInput, {
    nullable: false
  })
  creator!: UserCreateNestedOneWithoutGroupsCreatedInput;

  @TypeGraphQL.Field(_type => TopicCreateNestedManyWithoutGroupInput, {
    nullable: true
  })
  topics?: TopicCreateNestedManyWithoutGroupInput | undefined;
}
