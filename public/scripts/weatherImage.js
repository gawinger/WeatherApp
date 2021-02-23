// set weather image depending on data given by openweather API
const setImage = (data, time) => {
  const firstChar = data.toString().charAt(0);
  const lastChar = data.toString().charAt(2);
  if (firstChar == 2) {
    return "lightning-raing.svg";
  } else if (firstChar == 3) {
    return "druzzle-alt.svg";
  } else if (firstChar == 5) {
    return "rain-alt.svg";
  } else if (firstChar == 6) {
    return "snow-alt.svg";
  } else if (firstChar == 7) {
    return "fog.svg";
  } else if (firstChar == 8) {
    if (lastChar == 0) {
      return "sun.svg";
    } else {
      return "cloud.svg";
    }
  }
};

module.exports = setImage;
