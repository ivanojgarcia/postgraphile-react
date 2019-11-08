import express from 'express';
import env from 'node-env-file';
env(__dirname + '/config/.env');
import { postgraphile } from 'postgraphile';

// import GetAllCompanies from './data/extendPlugins/GetAllCompanies';

const app = express(); 

const database = process.env.DB_DATABASE;
const host = process.env.DB_HOST;
const userDb = process.env.DB_USER;
const userPass = process.env.DB_PASS;
const dialectDb = process.env.DB_DIALECT;


app.use(
  postgraphile(
    `postgres://${userDb}:${userPass}@${host}/${database}` || "postgres://user:pass@host:5432/dbname",
    [ "public"],
    {
      watchPg: true,
      graphiql: true,
      // appendPlugins: [GetAllCompanies],
      enhanceGraphiql: true,
      // jwtPgTypeIdentifier: 'administration.jwt_token',
      // jwtSecret: 'superSecretRandom',
      // jwtRole: ['anonymous'],
      showErrorStack: true
    }
  )
);

async function main() {
  var port = process.env.PORT || '5000';
  await app.listen(port || 3000);
  console.log("Server start on port " + port)
}

  main()
