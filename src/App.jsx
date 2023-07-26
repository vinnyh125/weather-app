import './App.css';

let response = await fetch("https://api.weatherapi.com/v1/current.json?key=6d92a427f5fa4b5588c44957232507&q=Fuzhou&aqi=no");
let data = await response.json();
let cityName = data["location"]["name"];
let countryName = data["location"]["country"];
console.log(data);
let conditionText = data["current"]["condition"]["text"];
let conditionImage = data["current"]["condition"]["icon"];
let tempCel = data["current"]["temp_c"];
let tempFahr = data["current"]["temp_f"];

function Location() {
  return (
    <div id="location">
      {cityName}, {countryName}
    </div>
  );
}

function Conditions() {
  return (
    <div id="conditions">
      {conditionText}
    </div>
  );
}

function ConditionsImage() {
  return (
    <div id="conditions-image">
      <img src={conditionImage} alt={conditionText}></img>
    </div>
  );
}

function Temperature() {
  return (
    <div id="temperature">
      Celsius: {tempCel}°C, Fahrenheit: {tempFahr}°F
    </div>
  );
}

export default function Weather() {
  return (
    <>
      <div id="app-background">
        <div id="weather-content">
          <Location />
          <Conditions />
          <ConditionsImage />
          <Temperature />
        </div>
      </div>
    </>
  );
}
