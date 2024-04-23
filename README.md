npm init -y
npm i typescript --save-dev
npm install nodemon
npm install -D rimraf ts-node @types/node

SCRIPTS package.json
{
 "scripts": {
 "build": "rimraf ./build && tsc",
 "dev": "nodemon",
 "start": "node build/index.js"
 }

 ARQUIVO nodemon.json:
{
 "watch": ["src"],
 "ext": ".ts,.js",
 "ignore": [],
 "exec": "ts-node ./src/services/app.ts"
}

CRIAR ARQUIVO tsconfig.json
npx tsc --init

Servidor
npm install dotenv express --save-dev
npm install @types/dotenv @types/express --save-dev