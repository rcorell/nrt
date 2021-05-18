import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GroupUpdateManyWithoutCreatorInput } from "../inputs/GroupUpdateManyWithoutCreatorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TopicUpdateManyWithoutAuthorInput } from "../inputs/TopicUpdateManyWithoutAuthorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutGroupsInput {
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

  @TypeGraphQL.Field(_type => GroupUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  groupsCreated?: GroupUpdateManyWithoutCreatorInput | undefined;
}
