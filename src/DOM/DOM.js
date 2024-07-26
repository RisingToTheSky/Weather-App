import { displayInfo } from "../UI/UI";

function getInput() {
  const searchButton = document.querySelector("button[type='submit']");
  searchButton.addEventListener("click", (e) => {
    const location = document.getElementById("search").value;
    const search = document.querySelector("input");
    e.preventDefault();
    displayInfo(location);
    search.value = "";
  });
}

export { getInput };
