const jsonSever = require("json-server");
const server = jsonSever.create();
const categories = require("./api/categories.json");
const stores = require("./api/stores.json");

const router = jsonSever.router({ categories, stores });
const middlewares = jsonSever.defaults();

server.use(router);
server.use(middlewares);

server.listen(3001, () => {
  console.log("JSON Server is running");
});
