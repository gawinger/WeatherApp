const axios = require("axios");

// get location data from positionstack API
const getLocation = async (location) => {
  const data = await axios
    .get("http://api.positionstack.com/v1/forward", {
      params: {
        access_key: process.env.POSITIONSTACK_KEY,
        query: `${location}`,
        limit: 1,
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
      let { latitude, longitude, name, region, country } = response.data.data[0];
      return { latitude, longitude, name, region, country };
    })
    .catch((error) => {
      if (error.response) {
        return {
          error: "error",
          status: toString(error.response.status),
          text: toString(error.response.statusText),
        };
      }
    });
  return data;
};

module.exports = getLocation;
