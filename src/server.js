const app = require("./app");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://felipe:feli2705@ds061391.mlab.com:61391/goweek-felipe",
  {
    useNewUrlParser: true
  }
);

app.listen(process.env.PORT || 3001);
