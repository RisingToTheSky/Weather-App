import { getWeatherData } from "../API/apiController";

async function displayInfo(location) {
  const data = await getWeatherData(location);
  const icons = require.context("/assets/weatherIcons", false, /.svg$/);
  const buttons = document.querySelectorAll("button");
  const city = document.getElementById("city");
  const description = document.getElementById("description");
  const iconImage = document.getElementById("icon");
  iconImage.style.display = "block";
  const temperature = document.getElementById("temperature");
  const feelsLike = document.getElementById("feelsLike");
  const chanceOfRain = document.getElementById("chanceOfRain");

  city.textContent = data.address;
  description.textContent = data.description;
  iconImage.src = icons(`${data.weatherNow}.svg`);
  iconImage.alt = `${data.weatherNow}`;
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("active")) {
        temperature.textContent = `${convertTemperature(data.temperature)}`;
        feelsLike.textContent = `Feels Like: ${convertTemperature(
          data.feltTemperature
        )}`;
      }
    });
  });
  temperature.textContent = ` ${convertTemperature(data.temperature)}`;
  feelsLike.textContent = `Feels Like: ${convertTemperature(
    data.feltTemperature
  )}`;
  chanceOfRain.textContent = `Chance of rain: ${data.chanceOfRain}` + "%";
}

function convertTemperature(number) {
  const celsiusActive = document.querySelector(".celsius.active");
  const fahrenheitActive = document.querySelector(".fahrenheit.active");
  if (celsiusActive) {
    return (((number - 32) * 5) / 9).toFixed(1) + "°C";
  } else if (fahrenheitActive) {
    return (number * (9 / 5) + 32).toFixed(1) + "°F";
  }
}

export { displayInfo };
