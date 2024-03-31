import "./style.css";
import sunnyImg from "./images/sunny.svg";
import rainChanceIcon from "./images/rainChance.svg";
import sunnyWithCloudsImg from "./images/sunnyWithClouds.svg";
import sunnyWithRainImg from "./images/sunnyWithRain.svg";
import sunnyWithThunderImg from "./images/sunnyWithThunder.svg";
import cloudyImg from "./images/cloudy.svg";

const API_KEY = "a48238e2ce2d4eff87e113534242803";
// https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london
const locationDiv = document.querySelector("#location");
const rainChanceImg = document.querySelector("#rain-chance-img");
rainChanceImg.src = rainChanceIcon;
const rainChancePercentage = document.querySelector("#rain-chance-percentage");
const weatherIcon = document.querySelector("#weather-icon");
const todayTempDiv = document.querySelector("#temperature");
const dayOneWeekday = document.querySelector("#day-one .weekday");
const dayOneMinMax = document.querySelector("#day-one .min-max-temp");
const dayTwoWeekday = document.querySelector("#day-two .weekday");
const dayTwoMinMax = document.querySelector("#day-two .min-max-temp");
const dayThreeWeekday = document.querySelector("#day-three .weekday");
const dayThreeMinMax = document.querySelector("#day-three .min-max-temp");
const searchInput = document.querySelector("#search-input");
async function checkWeather(location) {
  try {
    const dayUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;
    const responseDay = await fetch(dayUrl, { mode: "cors" });
    const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=3&q=${location}`;
    const responseForecast = await fetch(forecastUrl, { mode: "cors" });
    const weatherDataDay = await responseDay.json();
    const weatherDataForecast = await responseForecast.json();
    const currentValues = weatherDataDay.current;
    const dayOne = setForecastValues(
      weatherDataForecast.forecast.forecastday[0].day,
    );
    const dayTwo = setForecastValues(
      weatherDataForecast.forecast.forecastday[1].day,
    );
    const dayThree = setForecastValues(
      weatherDataForecast.forecast.forecastday[2].day,
    );
    const currentTemp = setCurrentTemp(currentValues);
    const currentDate = weatherDataForecast.forecast.forecastday[0].date;
    showWeather(location, currentTemp, dayOne, dayTwo, dayThree);
  } catch (error) {
    console.log(error);
  }
}
checkWeather("London");
// function showWeatherData(city, country, temp_c, wind_dir) {}
function showWeather(location, currentTemp, dayOne, dayTwo, dayThree) {
  // locationDiv.textContent = location;
  searchInput.value = location;
  todayTempDiv.textContent = `${currentTemp}°C`;
  setWeatherIcon(dayOne.condition);
  rainChancePercentage.textContent = dayOne.rainChance;
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const now = new Date().getDay();
  dayOneWeekday.textContent = "Today";
  dayTwoWeekday.textContent = "Tomorrow";
  dayThreeWeekday.textContent = weekDays[now + 2];
  dayOneMinMax.textContent = `${dayOne.minTemp}°C/${dayOne.maxTemp}°C`;
  dayTwoMinMax.textContent = `${dayTwo.minTemp}°C/${dayTwo.maxTemp}°C`;
  dayThreeMinMax.textContent = `${dayThree.minTemp}°C/${dayThree.maxTemp}°C`;
}
function setCurrentTemp(today) {
  return today.temp_c;
}
function setWeatherIcon(condition) {
  if (condition.includes("sunny")) {
    weatherIcon.src = sunnyImg;
  } else if (condition.includes("patchy")) {
    weatherIcon.src = sunnyWithCloudsImg;
  } else if (condition.includes("rain")) {
    weatherIcon.src = sunnyWithRainImg;
  } else if (condition.includes("thunder")) {
    weatherIcon.src = sunnyWithThunderImg;
  } else {
    weatherIcon.src = cloudyImg;
  }
}
function setForecastValues(day) {
  return {
    minTemp: day.mintemp_c,
    maxTemp: day.maxtemp_c,
    condition: day.condition.text,
    rainChance: day.daily_chance_of_rain,
  };
}
// Change location
searchInput.onkeypress = function (e) {
  if (!e) e = window.event;
  const keyCode = e.code || e.key;
  if (keyCode === "Enter") {
    const searchQuery = searchInput.value;
    checkWeather(searchQuery);
  }
};
