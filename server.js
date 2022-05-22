const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const app = express();
const db = require("./config/db");
// const key = require("./config/key");
const port = 4000;
const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const startup = async () => {
  const mongoClient = new MongoClient(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const dbClient = await mongoClient.connect()
  const db1 = dbClient.db("computerparts");
  require("./app/routes")(app, db1); //, key.key
  app.listen(port, () => {
    console.log("live on http://localhost:" + port);
  });
}
startup()

// MongoClient.connect(db.url, (err, database) => {
//   console.log("simple");
//   if (err) return console.log(err);
//   require("./app/routes")(app, database, key.key);
//   app.listen(port, () => {
//     console.log("live on http://localhost:" + port);
//   });
// });
