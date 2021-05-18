import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GroupAvgAggregate } from "../outputs/GroupAvgAggregate";
import { GroupCountAggregate } from "../outputs/GroupCountAggregate";
import { GroupMaxAggregate } from "../outputs/GroupMaxAggregate";
import { GroupMinAggregate } from "../outputs/GroupMinAggregate";
import { GroupSumAggregate } from "../outputs/GroupSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class GroupGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  creatorId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => GroupCountAggregate, {
    nullable: true
  })
  count!: GroupCountAggregate | null;

  @TypeGraphQL.Field(_type => GroupAvgAggregate, {
    nullable: true
  })
  avg!: GroupAvgAggregate | null;

  @TypeGraphQL.Field(_type => GroupSumAggregate, {
    nullable: true
  })
  sum!: GroupSumAggregate | null;

  @TypeGraphQL.Field(_type => GroupMinAggregate, {
    nullable: true
  })
  min!: GroupMinAggregate | null;

  @TypeGraphQL.Field(_type => GroupMaxAggregate, {
    nullable: true
  })
  max!: GroupMaxAggregate | null;
}
