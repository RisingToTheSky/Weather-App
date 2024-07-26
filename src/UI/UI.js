import { getWeatherData } from "../API/apiController";

async function displayInfo(location) {
  const data = await getWeatherData(location);
  console.log(data);
  const city = document.getElementById("city");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  const description = document.getElementById("description");
  const icon = document.getElementById("icon");
  const temperature = document.getElementById("temperature");
  const feelsLike = document.getElementById("feelsLike");
  const chanceOfRain = document.getElementById("chanceOfRain");

  city.textContent = data.address;
  sunrise.textContent = data.sunrise;
  sunset.textContent = data.sunset;
  description.textContent = data.description;
  icon.textContent = data.weatherNow;
  temperature.textContent = data.temperature + " °F";
  feelsLike.textContent = data.feltTemperature + " °F";
  chanceOfRain.textContent = data.chanceOfRain + "%";
}

export { displayInfo };
