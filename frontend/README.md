# React + Vite
NODE_ENV
 If you run into this problem in 2021, 
install cross-env as a dev dependency by running npm i -D cross-env.

Then, modify your command in the package.json file thus:

"scripts": {
     "globals" : "npm i -g cross-env",
    "start": "cross-env NODE_ENV=production node backend/server.js",
    "dev": "cross-env NODE_ENV=development nodemon backend/server.js",
    "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
  },
===================================================
  some times this can fixed using win-node-env
  npm install -g win-node-env

  ================================================
  Since you using window perating system 
  "scripts": {
    "start": " SET NODE_ENV=development &  node  backend/server",
    "qa2": "SET NODE_ENV=qa2 & node ./bin/server",
    "prod": "SET NODE_ENV=production & nodemon backend/server"
  },

  ======this is work=====
  For those who are getting this error
"NODE_ENV" is not recognized as an internal or external command, operable command or batch file.

install this  -  npm install cross-env --save-dev
then add cross-env before both -  

"scripts": {
  "dev": "cross-env NODE_ENV=development nodemon backend/server.js",
  "start": "cross-env NODE_ENV=production node backend/server.js"
}

then npm run start
