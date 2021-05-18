import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupCreateNestedManyWithoutCreatorInput } from "../inputs/GroupCreateNestedManyWithoutCreatorInput";
import { GroupCreateNestedManyWithoutUsersInput } from "../inputs/GroupCreateNestedManyWithoutUsersInput";
import { TopicCreateNestedManyWithoutAuthorInput } from "../inputs/TopicCreateNestedManyWithoutAuthorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TopicCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  topics?: TopicCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => GroupCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  groupsCreated?: GroupCreateNestedManyWithoutCreatorInput | undefined;

  @TypeGraphQL.Field(_type => GroupCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  groups?: GroupCreateNestedManyWithoutUsersInput | undefined;
}
