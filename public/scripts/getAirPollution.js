const axios = require("axios");

// fetch data about air quality from webAPI
const getAirPollution = async (lat, lon) => {
  const apiKey = process.env.OPENWEATHER_KEY;
  const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  const data = await axios
    .get(url)
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

module.exports = getAirPollution;
