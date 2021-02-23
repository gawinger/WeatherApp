const airQuality = document.querySelector(".air-main");

// change color and innerText of circle with air Quality rating
// depending on fetched data

const airValue = airQuality.innerText;

if (airValue == 1) {
  airQuality.innerText = "Very Good";
  airQuality.style.color = "#319615";
  airQuality.style.borderColor = "#319615";
} else if (airValue == 2) {
  airQuality.innerText = "Fair";
  airQuality.style.color = "#A8CA51";
  airQuality.style.borderColor = "#A8CA51";
} else if (airValue == 3) {
  airQuality.innerText = "Medium";
  airQuality.style.color = "#D9CB4E";
  airQuality.style.borderColor = "#D9CB4E";
} else if (airValue == 4) {
  airQuality.innerText = "Poor";
  airQuality.style.color = "#D9674E";
  airQuality.style.borderColor = "#D9674E";
} else if (airValue == 5) {
  airQuality.innerText = "Very Poor";
  airQuality.style.color = "992727";
  airQuality.style.borderColor = "992727";
}
