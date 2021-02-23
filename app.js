require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const getLocation = require("./public/scripts/getLocation");
const getLocationByIp = require("./public/scripts/getLocationByIp");
const getWeather = require("./public/scripts/getWeather");
const getAirPollution = require("./public/scripts/getAirPollution");
const { getCurrentTime, getSunTime, getNextDays, getNextHours } = require("./public/scripts/getCurrentTime");
const setImage = require("./public/scripts/weatherImage");
const { errorHandler } = require("./utilities/errorHandler");

app.set("view engine", "ejs");
app.set("/views", path.join(__dirname, "views"));

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// render homepage
app.get("/", async (req, res) => {
  // change geolocation to empty string
  let geolocation = "";
  // if user is searching for location then geolocate it
  if (req.query.getWeather) {
    geolocation = await getLocation(req.query.getWeather);
    errorHandler(res, geolocation);
  } else {
    // else try to get location info by ip address
    geolocation = await getLocationByIp();
  }
  // if geolocated succesfully get weather and air quality data by providing lat and lon
  if (!geolocation.error) {
    const { latitude, longitude, name, region, country } = geolocation;
    const weatherData = await getWeather(latitude, longitude);
    const airQuality = await getAirPollution(latitude, longitude);
    errorHandler(res, weatherData, airQuality);
    // if there was no error getting data about weather or air quality
    // provide detailed forecast
    if (!weatherData.error || !airQuality.error) {
      const { current, daily, hourly } = weatherData;
      const currentTime = getCurrentTime();
      const imgURL = setImage(current.weather[0].id);
      current.sunrise = getSunTime(current.sunrise);
      current.sunset = getSunTime(current.sunset);
      return res.render("index", { current, daily, hourly, name, region, country, currentTime, getNextDays, getNextHours, airQuality, imgURL });
    }
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
