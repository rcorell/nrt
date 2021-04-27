import { GraphQLScalarType, Kind } from 'graphql';
import jsonwebtoken from 'jsonwebtoken';

export const APP_SECRET = 'INSECURE stub for app secret';

export const getTokenPayload = (token: string): any => {
    return jsonwebtoken.verify(token, APP_SECRET);
};

export const getUserId = (req, authToken = null) => {
    if (req) {
        const authHeader = req.headers.authorization;

        if (authHeader) {
            const token = authHeader.replace('Bearer ', '');

            if (!token) {
                throw new Error('No token found');
            }

            const { userId } = getTokenPayload(token);

            return userId;
        }
    } else if (authToken) {
        const { userId } = getTokenPayload(authToken!);

        return userId;
    }

    throw new Error('Not authenticated');
};

export const DateTimeScalar = new GraphQLScalarType({
    description: 'DateTime custom scalar type',
    name: 'DateTime',
    parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
            return new Date(parseInt(ast.value, 10));
        }
        return null;
    },
    parseValue(value) {
        return new Date(value);
    },
    serialize(value) {
        return value.getTime();
    }
});
