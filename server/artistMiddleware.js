// const fetch = require('node-fetch');

const { stringifyRequest } = require('css-loader/dist/utils');

const artistMiddleware = {};

artistMiddleware.getWorks= (req, res, next) => {
  const apiUrl =
    'https://collectionapi.metmuseum.org/public/collection/v1/search';

  const { artist } = req.params;

  // Set your query parameters
  const queryParams = new URLSearchParams({
    isPublicDomain: true,
    artistOrCulture: true,
    q: artist
  });

  const fullUrl = `${apiUrl}?${queryParams.toString()}`;
  console.log(fullUrl);

  console.log('req.param', req.params);

  fetch(fullUrl)
    .then((response) => response.json())
    .then((data) => {
      const objectIDs = data.objectIDs;
      const artist = data.artistDisplayName;
      // console.log('Object IDs:', objectIDs);
      // console.log('line 38', Array.isArray(objectIDs));
      // console.log('line 39: data', data);
      res.locals.allObjects = objectIDs;
      console.log(res.locals);
      // const objIdList = res.locals.allObjects;
      // console.log(typeof objIdList[1]);
      // console.log(Array.isArray(objIdList));
    })
    .then(() => next());
  console.log('getWorks middleware executed');
};



// middleware.loop = (req, res, next) => {
//   // const objIdList = res.locals.allObjects;
//   const arrayLength = res.locals.allObjects;
//   console.log('line 74', arrayLength);
//   let promises = [];
//   for (let i = 0; i < arrayLength.length; i++) {
//     const objectUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayLength[i]}`;
//     promises.push(fetch(objectUrl).then((response) => response.json()));
//   }
//   Promise.all(promises)
//     .then((dataArray) => {
//       console.log(dataArray);
//       const artistNameList = dataArray.map((data) => data.artistDisplayName);
//       const imageList = dataArray.map((data) => data.primaryImage);
//       const titleList = dataArray.map((data) => data.title);
//       res.locals.artistName = artistNameList;
//       res.locals.image = imageList;
//       res.locals.title = titleList;
//       // res.locals.artistName = data.artistDisplayName;
//       // console.log(data.artistDisplayName);
//     })
//     .then(() => next());
// };


module.exports = artistMiddleware;
