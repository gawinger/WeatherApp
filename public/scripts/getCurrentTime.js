const getCurrentTime = () => {
  const date = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let minutes = date.getMinutes();
  if (minutes.toString().length < 2) {
    minutes = `0` + minutes;
  }
  return {
    month: months[date.getMonth()],
    day: days[date.getDay()],
    date: date.getDate(),
    hour: date.getHours(),
    minutes,
  };
};

getSunTime = (time) => {
  const hours = Math.floor(time / (60 * 60)) % 24;
  const minutes = Math.floor(time / 60) % 60;
  return `${hours}:${minutes}`;
};

const getNextDays = (day, i) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const numOfDay = days.indexOf(day);
  return days[(numOfDay + i) % 7];
};

const getNextHours = (hour, i) => {
  return `${(hour + i) % 24}:00`;
};

module.exports = { getCurrentTime, getSunTime, getNextDays, getNextHours };
