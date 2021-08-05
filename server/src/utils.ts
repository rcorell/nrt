import { Request } from 'express-serve-static-core';
import jsonwebtoken from 'jsonwebtoken';

export const APP_SECRET = 'INSECURE stub for app secret';

export const getTokenPayload = (token: string): any => {
    return jsonwebtoken.verify(token, APP_SECRET);
};

export const getUserId = (req: Request, authToken = null) => {
    if (req) {
        const authHeader = req.headers.authorization;

        if (authHeader) {
            const token = authHeader.replace('Bearer ', '');

            if (!token) {
                throw new Error('No token found');
            }

            const { userId } = getTokenPayload(token);

            return Number(userId);
        }
    } else if (authToken) {
        const { userId } = getTokenPayload(authToken!);

        return Number(userId);
    }

    throw new Error('Not authenticated');
};
