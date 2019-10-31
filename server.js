// New File Metadata Microservice Project by Yasmin Melean 31/10/2019.
// init project
'use strict';

const express = require("express");
const multer = require("multer");
const upload = multer({dest: "uploads/"});
const app = express();

// Require CORS to allow FCC the remote testing of the API.
// More about Cors: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing.
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200})); // Some legacy browsers (IE11, various SmartTVs) choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

// Accepts a single file with the name fielename. The single file will be stored in req.file.
app.post("/", upload.single("upfile"), function(req, res) {
  res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size});
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app File Metadata Microservice is listening on port " + listener.address().port);
});
