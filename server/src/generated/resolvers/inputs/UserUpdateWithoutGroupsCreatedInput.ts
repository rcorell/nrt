import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GroupUpdateManyWithoutUsersInput } from "../inputs/GroupUpdateManyWithoutUsersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TopicUpdateManyWithoutAuthorInput } from "../inputs/TopicUpdateManyWithoutAuthorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutGroupsCreatedInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TopicUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  topics?: TopicUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => GroupUpdateManyWithoutUsersInput, {
    nullable: true
  })
  groups?: GroupUpdateManyWithoutUsersInput | undefined;
}
