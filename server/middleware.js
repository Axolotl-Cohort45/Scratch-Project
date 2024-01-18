// const fetch = require('node-fetch');

const { stringifyRequest } = require('css-loader/dist/utils');

const middleware = {};

middleware.getArt = (req, res, next) => {
  const apiUrl =
    'https://collectionapi.metmuseum.org/public/collection/v1/search';

  const { name } = req.params;
  console.log(name);

  // Set your query parameters
  const queryParams = new URLSearchParams({
    // department: 'egyptian art',
    isPublicDomain: true,
    // tags: true,
    // q: name,
    artistOrCulture: true,
    q: name
  });

  const fullUrl = `${apiUrl}?${queryParams.toString()}`;
  console.log(fullUrl);

  console.log('req.param', req.params);

  // Construct the URL with query parameters
  //   const fullUrl = `${apiUrl}?${queryParams.toString()}`;
  // fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?isOnView=true')
  // fetch(
  //   'https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&tags=true&q=Lions'
  //)
  fetch(fullUrl)
    .then((response) => response.json())
    .then((data) => {
      const objectIDs = data.objectIDs;
      const artist = data.artistDisplayName;
      // console.log('Object IDs:', objectIDs);
      // console.log('line 38', Array.isArray(objectIDs));
      console.log('line 39: data', data);
      res.locals.allObjects = objectIDs;
      console.log(res.locals);
      const objIdList = res.locals.allObjects;
      console.log(typeof objIdList[1]);
      console.log(Array.isArray(objIdList));

      // const storage = [];

      // for (let i = 0; i < objIdList.length; i++) {
      //   const objectUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objIdList[i]}`;
      //   // console.log(objectUrl);

      //   fetch(objectUrl)
      //     .then((response) => response.json())
      //     .then((data) => {
      //       // res.locals.artistName = data.artistDisplayName;
      //       // console.log(data.artistDisplayName);
      //       storage.push(data.artistDisplayName);
      //     })
      //     .then();
      //   // .then(() => next());
      // }

      // res.locals.artistName = storage;
    })
    .then(() => next());
  console.log('getArt middleware executed');
};

middleware.test= (req, res, next) => {
  const apiUrl =
    'https://collectionapi.metmuseum.org/public/collection/v1/search';

  const { artist } = req.params;

  // Set your query parameters
  const queryParams = new URLSearchParams({
    isPublicDomain: true,
    artistDisplayName: artist
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



middleware.loop = (req, res, next) => {
  // const objIdList = res.locals.allObjects;
  const arrayLength = res.locals.allObjects;
  console.log('line 74', arrayLength);
  let promises = [];
  for (let i = 0; i < arrayLength.length; i++) {
    const objectUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayLength[i]}`;
    promises.push(fetch(objectUrl).then((response) => response.json()));
  }
  Promise.all(promises)
    .then((dataArray) => {
      console.log(dataArray);
      const artistNameList = dataArray.map((data) => data.artistDisplayName);
      const imageList = dataArray.map((data) => data.primaryImage);
      const titleList = dataArray.map((data) => data.title);
      res.locals.artistName = artistNameList;
      res.locals.image = imageList;
      res.locals.title = titleList;
      // res.locals.artistName = data.artistDisplayName;
      // console.log(data.artistDisplayName);
    })
    .then(() => next());
};

// fetch(objectUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     // res.locals.artistName = data.artistDisplayName;
//     console.log(data.artistDisplayName);
//   })
// .then();

// middleware.loop = (req, res, next) => {
//   let objIdList = res.locals.all;
//   console.log('line 64', typeof objIdList);
//   for (let element of objIdList) {
//     const objectUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`;
//     console.log(objectUrl);
//   }
//   return next();
// };

//for (let element of objectIDs) {
//const objectUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`;
//console.log(objectUrl);

//   // Make a fetch request for each Object ID
//   fetch(objectUrl)
//     .then((response) => response.json())
//     .then((objectData) => {
//       console.log(`Data for Object ID by Artist:`, objectData);
//       // console.log(`Artist for Object ID ${element}:`, objectData.artistDisplayName);
//     });
//   //   .catch((error) => {
//   //     // Handle errors for each Object ID
//   //     console.error(`Error fetching data for Object ID ${objectId}:`, error);
//   //   });
//}

module.exports = middleware;
