const key = "YfLBfLhjCXTfPathZBnDuRnidSHRyzzA"; //! API endpoint

//?get weather info
const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";

  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

//? get city info
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";

  //! Tgis is the base link we call for fetching thedetails of a city

  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);

  const data = await response.json();

  return data[0]; //! Returns a promise, thus we need to  consume the promise.
};

getCity("manchester")
  .then((data) => {
    return getWeather(data.Key);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

//! data recieved from getcity fn is used as an arg for getWeather, its returned as a promise which is consumed using then and logged into console
