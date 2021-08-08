const weather = document.querySelector("#weather span:first-child");
const icon = document.querySelector("#weather span:nth-child(2)");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "f9d70a28fdaef417a23d2ccffeedc924";

let newIcon = document.createElement("i");


function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      switch(data.weather[0].main){
        case "Rain":
          newIcon.setAttribute("class", "fas fa-umbrella");
          icon.appendChild(newIcon);
          break;
        case "Clouds":
          newIcon.setAttribute("class", "fas fa-cloud");
          icon.appendChild(newIcon);
          break;
        case "Clear":
          newIcon.setAttribute("class", "fas fa-sun");
          icon.appendChild(newIcon);
          break;
        case "Snow":
          newIcon.setAttribute("class", "fas fa-snowflake");
          icon.appendChild(newIcon);
          break;
      };
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

