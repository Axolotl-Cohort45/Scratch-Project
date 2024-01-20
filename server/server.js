const path = require("path");
const express = require("express");

const app = express();

// const middleware = require('./middleware');
// const artistMiddleware = require('./artistMiddleware');

app.use(express.json()); //-> confirmed
app.use(express.urlencoded({ extended: true }));

console.log("hello world");

// app.get('/api/art/:name', middleware.getArt, middleware.loop, (req, res) => {
//   console.log('Data in res.locals.all:', res.locals);
//   return res.status(200).json({ res: res.locals });
// });

// app.get('/api/art/:artist', artistMiddleware.getWorks, middleware.loop, (req, res) => {
//   console.log('Data in res.locals.all:', res.locals);
//   return res.status(200).json({ res: res.locals });
// });

// app.get('/api/test', middleware.getArt, (req, res) => {
//   return res.status(200).send({ test: 'cool this worked' });
// });

// app.get('/api/test2', (req, res) => {
//   return res.status(200).send({ test: 'cool this worked2' });
// });

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, "../src/index.html"));
});

// Global error handling middleware
// How can we trigger this to run? - by passing something into next
// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred - color not found' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });

app.listen(3000, () => {
  console.log(`Server listening on port: 3000`);
});

module.exports = app;
