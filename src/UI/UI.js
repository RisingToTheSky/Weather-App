import { getWeatherData } from "../API/apiController";

function displayInfo() {
  const searchButton = document.querySelector("button");
  searchButton.addEventListener("click", (e) => {
    const location = document.getElementById("search").value;
    e.preventDefault();
    getWeatherData(location);
  });
}

export { displayInfo };
