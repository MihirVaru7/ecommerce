
/* external imports */
const mongoose = require("mongoose");
require("dotenv").config();

/* internal imports */
const app = require("./app");
const consoleMessage = require("./utils/console.util");

/* database connection */
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.ATLAS_URI, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => consoleMessage.successMessage("Connected to MongoDB."))
  .catch((error) => consoleMessage.errorMessage(error.message));

/* establish server port */
app.listen(process.env.PORT, () => {
  consoleMessage.warningMessage(
    `Server is running on port ${process.env.PORT}.`
  );
});
