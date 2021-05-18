import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GroupUpdateOneRequiredWithoutTopicsInput } from "../inputs/GroupUpdateOneRequiredWithoutTopicsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTopicsInput } from "../inputs/UserUpdateOneRequiredWithoutTopicsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TopicUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTopicsInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutTopicsInput | undefined;

  @TypeGraphQL.Field(_type => GroupUpdateOneRequiredWithoutTopicsInput, {
    nullable: true
  })
  group?: GroupUpdateOneRequiredWithoutTopicsInput | undefined;
}
