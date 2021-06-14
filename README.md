# TypeScript Node Service and Client Template
* Server: Apollo GraphQL, Prisma
* Client: React

## Setup
1. Clone repo
1. Run server
	1. cd <repo>/server
	1. npm install
	1. npm run build
	1. npm start
1. Run client
	1. cd <repo>/client
	1. npm install
	1. npm start
	1. This should open a browser to the site
1. Click on "Sign Up" from navbar
1. Fill out form, click "Sign Up"

## Overview
### General
1. Execution: Node
1. Language: TypeScript
1. Config: dotenv
1. Formatting: prettier
1. Linting: eslint
1. Git: husky

### Client
1. Framework: React
1. State: React Context
1. Asynch: React Hooks
1. CSS: styled-components
1. GraphQL Client: Apollo
1. Linting: stylelint
1. Testing/Coverage: Jest, RTL

### Server
1. Framework: Apollo GraphQL
1. Database: Postgres
1. ORM: Prisma
1. Logging: winston, morgan
1. Testing: ?
1. Coverage: nyc
1. Documentation: ?


## Server

### Setup
1. npm install
1. install postgres
1. set server/.env DATABASE_URL
1. npx prisma generate

### Build
1. npx run build

### Run
1. npm start

### Make queries
1. Go to htpp://localhost:4000

### Browse database
1. npx prisma studio

### Generate migration
1. npx prisma migrate dev --name `<NAME OF MIGRATION>`

### Update client after migration
1. npx prisma generate

### Create new db from schema
1. npx prisma db push


## Add endpoint and query
1. Server
	1. Add query declaration to GraphQL schema (server/src/schema.graphql)
	1. Add query code to relevant file in server/src/resolvers/
	1. If you made a new resolver file, include it in the resolver list in index.ts
	1. npm run generatePrismaClient
	1. npm run build
	1. npm start
1. Client
	1. npm run schema:update
	1. Add query string to src/api/api.ts
	1. npm run codegen
	1. Add client call
	1. Profit