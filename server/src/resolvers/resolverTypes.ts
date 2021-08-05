import { PrismaClient } from '@prisma/client';
import { Request } from 'express-serve-static-core';

export type Context = Request & { prisma: PrismaClient; userId: number };

export type Resolver = (parent: any, args: any, context: Context) => Promise<any>;
