import * as TypeGraphQL from "type-graphql";

export enum TopicScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  authorId = "authorId",
  groupId = "groupId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(TopicScalarFieldEnum, {
  name: "TopicScalarFieldEnum",
  description: undefined,
});
