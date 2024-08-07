// Get data from API
async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=3XMJC6XUF2892JDDJXKMYFC7Q`,
      { mode: "cors" }
    );
    if (!response.ok) {
      alert(new Error(`City ${location} not found!`));
    }
    const data = await response.json();
    const processedData = processWeatherData(data);
    return processedData;
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
  return {
    address,
    conditions,
    description,
    weatherNow,
    temperature,
    feltTemperature,
    chanceOfRain,
  };
}

export { getWeatherData };