import app from "./app";
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://felipe:feli2705@ds061391.mlab.com:61391/goweek-felipe",
  {
    useNewUrlParser: true
  }
);

app.listen(3333, () => {
  console.log("Server is running at port 3333");
});
