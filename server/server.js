const path = require("path");
const express = require("express");
const footprintsRouter = require("./routes/footprints");
const searchRouter = require("./routes/search");
const wishlistRouter = require("./routes/wishlist");

const app = express();

app.use(express.json()); //-> confirmed
app.use(express.urlencoded({ extended: true }));

console.log("hello world");


app.get("/", (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, "../src/index.html"));
});

app.use("/footprints", footprintsRouter);
app.use("/search", searchRouter);
app.use("/wishlist", wishlistRouter);

// Global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred - color not found" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log(`Server listening on port: 3000`);
});

module.exports = app;
