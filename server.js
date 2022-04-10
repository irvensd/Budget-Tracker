const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api.js"));

app.listen(process.env.PORT || 3003, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

// k6xB9XJthcrf9ke2