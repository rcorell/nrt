import * as bcrypt from 'bcryptjs';
import { GraphQLResolveInfo } from 'graphql';
import * as jsonwebtoken from 'jsonwebtoken';
import * as TypeGraphQL from 'type-graphql';

import { APP_SECRET } from '../utils';
import { User } from '../generated/models/User';
import {
    getPrismaFromContext
} from '../generated/helpers';

@TypeGraphQL.ObjectType({
    isAbstract: true
})
export class AuthPayload {
    @TypeGraphQL.Field((_type) => String, {
        nullable: false
    })
    token!: string;
};


@TypeGraphQL.ArgsType()
export class SignupArgs {
    @TypeGraphQL.Field((_type) => String, {
        nullable: false
    })
    name!: string;

    @TypeGraphQL.Field((_type) => String, {
        nullable: false
    })
    email!: string;

    @TypeGraphQL.Field((_type) => String, {
        nullable: false
    })
    password!: string;
}

@TypeGraphQL.Resolver((_of) => User)
export class SignupResolver {
    @TypeGraphQL.Mutation((_returns) => AuthPayload, {
        nullable: true
    })
    async signup(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Info() _info: GraphQLResolveInfo,
        @TypeGraphQL.Args() args: SignupArgs
    ): Promise<AuthPayload | null> {
        console.log(args);
        const password = await bcrypt.hash(args.password, 10);
        const user = await getPrismaFromContext(ctx).user.create({data: { ...args, password }});
        const token = jsonwebtoken.sign({ userId: user.id }, APP_SECRET);

        return {
            token
        };
    }
}

// export const signup = async (_parent, args, context) => {
//     const password = await bcrypt.hash(args.password, 10);
//     const user = await context.prisma.user.create({ data: { ...args, password } });
//     const token = jsonwebtoken.sign({ userId: user.id }, APP_SECRET);

//     return {
//         token,
//         user
//     };
// };

// export const signup = async (_parent, args, context) => {
//     const password = await bcrypt.hash(args.password, 10);
//     const user = await context.prisma.user.create({ data: { ...args, password } });
//     const token = jsonwebtoken.sign({ userId: user.id }, APP_SECRET);

//     return {
//         token,
//         user
//     };
// };

// export const login = async (_parent, args, context) => {
//     const user = await context.prisma.user.findUnique({ where: { email: args.email } });
//     if (!user) {
//         throw new Error('No such user found');
//     }

//     const valid = await bcrypt.compare(args.password, user.password);
//     if (!valid) {
//         throw new Error('Invalid password');
//     }

//     const token = jsonwebtoken.sign({ userId: user.id }, APP_SECRET);

//     return {
//         token,
//         user
//     };
// };

// export const createTopic = async (_parent, args, context) => {
//     const { userId } = context;

//     return await context.prisma.topic.create({
//         data: {
//             author: { connect: { id: userId } },
//             description: args.description,
//             title: args.title
//         }
//     });
// };

// export const createGroup = async (_parent, args, context) => {
//     const { userId } = context;

//     return await context.prisma.group.create({
//         data: {
//             creator: { connect: { id: userId } },
//             description: args.description,
//             name: args.name
//         }
//     });
// };
