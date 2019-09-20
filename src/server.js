const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.connect(
  "mongodb://felipe:feli2705@ds061391.mlab.com:61391/goweek-felipe",
  {
    useNewUrlParser: true
  }
);

app.use(cors());
app.use(express.json());
app.use(require("./routes"));
app.listen(process.env.PORT || 3001);
