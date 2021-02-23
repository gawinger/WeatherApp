const axios = require("axios");
const url = "https://geolocation-db.com/json";

// try to get user location by IP address
const getLocationByIP = async () => {
  const data = await axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
  location = {
    latitude: data.latitude,
    longitude: data.longitude,
    name: data.city,
    region: data.state,
    country: data.country_name,
  };
  return location;
};

module.exports = getLocationByIP;
