const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(
    // process.env.MONGODB_URI || 
    "mongodb+srv://testUser:I81NIjfBdTMdW4Dn@vietvodb-gf9yq.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});