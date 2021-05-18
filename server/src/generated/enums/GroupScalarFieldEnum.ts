import * as TypeGraphQL from "type-graphql";

export enum GroupScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  creatorId = "creatorId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(GroupScalarFieldEnum, {
  name: "GroupScalarFieldEnum",
  description: undefined,
});
