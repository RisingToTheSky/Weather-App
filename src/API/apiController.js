// Get data from API
async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=3XMJC6XUF2892JDDJXKMYFC7Q`,
      { mode: "cors" }
    );
    const data = await response.json();
    const processedData = processWeatherData(data);
    return console.log(processedData);
  } catch (err) {
    return console.log(err);
  }
}

// Get relevant data
function processWeatherData(data) {
  const address = data.resolvedAddress;
  const conditions = data.currentConditions.conditions;
  const description = data.description;
  const weatherNow = data.currentConditions.icon;
  const temperature = data.currentConditions.temp;
  const feltTemperature = data.currentConditions.feelslike;
  const chanceOfRain = data.currentConditions.precipprob;
  const sunrise = data.currentConditions.sunrise;
  const sunset = data.currentConditions.sunset;
  const daysForecast = data.days;
  return {
    address,
    conditions,
    description,
    weatherNow,
    temperature,
    feltTemperature,
    chanceOfRain,
    sunrise,
    sunset,
    daysForecast,
  };
}

export { getWeatherData };
