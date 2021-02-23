const axios = require("axios");

// get detailed weather data form openweathermap API
const getWeather = async (latitude, longitude) => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall`;
  const data = await axios
    .get(weatherUrl, {
      params: {
        lat: latitude,
        lon: longitude,
        exclude: "minutely",
        units: "metric",
        apiKey: process.env.OPENWEATHER_KEY,
      },
    })
    .then((response) => {
      if (response.data.data && response.data.data.length === 0) {
        return {
          error: "error",
          status: 404,
          text: "Unable to find location. Try another search",
        };
      }
      if (response.data.response && response.data.response.statusText === "Bad Request") {
      } else {
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error.response);
      if (error.response) {
        return {
          error: "error",
          status: error.response.status,
          text: error.response.statusText,
        };
      }
    });
  return data;
};

module.exports = getWeather;
