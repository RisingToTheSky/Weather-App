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

function switchScale() {
  const scales = document.querySelectorAll(".scale");
  const celsius = document.querySelector(".celsius.scale");
  celsius.classList.add("active");
  scales.forEach((button) => {
    button.addEventListener("click", () => {
      scales.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    });
  });
}

export { getInput };
export { switchScale };
