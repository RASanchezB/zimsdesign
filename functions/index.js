const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require("firebase-admin");
const express = require("express");
admin.initializeApp();
const app1 = express();
app1.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app1.get("/", (request, response) => {
  admin
    .database()
    .ref()
    .child("/productos")
    .once("value", snap => {
      response.json(snap.exportVal());
    });
});
exports.products = functions.https.onRequest(app1);
var bodyParser = require("body-parser");
const app2 = express();
app2.use(bodyParser());
app2.use(bodyParser.urlencoded({ extended: true }));
app2.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app2.post("/", (req, res) => {
  let body = JSON.parse(req.body);
  admin
    .database()
    .ref()
    .child("/pedidos")
    .push()
    .set(body);
  res.end("200");
});
exports.orders = functions.https.onRequest(app2);
