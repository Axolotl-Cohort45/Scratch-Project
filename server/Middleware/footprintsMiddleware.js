const footprintsMiddleware = {};

footprintsMiddleware.getCityId = async (req, res, next) => {
  //   const { cityName } = req.body;

  const answer = {
    cityName: 'Philadelphia',
    // brewName: '2nd Story Brewing Company'
  };

  const citytestName = 'Philadelphia';

  //   const cityUrl = `https://api.openbrewerydb.org/v1/breweries?by_city=${urlCityName}`;

  //   const brewName = '2nd Story Brewing Company';

  //   const brewUrl = `https://api.openbrewerydb.org/v1/breweries?by_name=${urlBrewName}`;

  let url;

  if (!answer.cityName) {
    const urlBrewName = encodeURIComponent(answer.brewName);
    url = `https://api.openbrewerydb.org/v1/breweries?by_name=${urlBrewName}`;
  } else {
    const urlCityName = encodeURIComponent(answer.cityName);
    url = `https://api.openbrewerydb.org/v1/breweries?by_city=${urlCityName}`;
  }

  console.log(url);

  try {
    const response = await fetch(url);
    const result = await response.json();

    res.locals.result = result;

    const brewList = result.map((data) => data.name);
    const addressList = result.map((data) => data.address_1);
    const cityList = result.map((data) => data.city);
    const stateList = result.map((data) => data.state);
    const phoneList = result.map((data) => data.phone);
    const websiteList = result.map((data) => data.website_url);
    res.locals.brewList = brewList;
    res.locals.addressList = addressList;
    res.locals.cityList = cityList;
    res.locals.stateList = stateList;
    res.locals.phoneList = phoneList;
    res.locals.websiteList = websiteList;

    console.log((res.locals.brewList = brewList));

    // console.log('res.locals', res.locals.cityList)
    return next();
  } catch (error) {
    console.error(error);
  }
};


footprintsMiddleware.addFootprint = async (req, res, next) => {
    try {
        const {
            userId,
            restaurant_name,
            address,
            city,
            phone,
            record_date,
			user_rating,
			comment
        } = req.body

        const footprint = await models.Footprint.create({
            userId,
            restaurant_name,
            address,
            city,
            phone,
			record_date,
			user_rating,
			comment
        })

        res.locals.footprint = footprint
        return next()
    }
     
    catch (err){
        return next({
            log: `Error in FootprintsMiddleware :${err}`,
            message: {
                err: `Error in FootprintsMiddleware :${err}`
            },
            status: 500
        })
    }
}

module.exports = footprintsMiddleware;
