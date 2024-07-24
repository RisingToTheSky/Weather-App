// Get data from API
async function getWeatherData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=3XMJC6XUF2892JDDJXKMYFC7Q`,
    { mode: "cors" }
  );
  return console.log(response.json());
}

// Get relevant data
