import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TopicUpdateManyWithoutGroupInput } from "../inputs/TopicUpdateManyWithoutGroupInput";
import { UserUpdateOneRequiredWithoutGroupsCreatedInput } from "../inputs/UserUpdateOneRequiredWithoutGroupsCreatedInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GroupUpdateWithoutUsersInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutGroupsCreatedInput, {
    nullable: true
  })
  creator?: UserUpdateOneRequiredWithoutGroupsCreatedInput | undefined;

  @TypeGraphQL.Field(_type => TopicUpdateManyWithoutGroupInput, {
    nullable: true
  })
  topics?: TopicUpdateManyWithoutGroupInput | undefined;
}
