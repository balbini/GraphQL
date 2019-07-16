const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("listening");
});
