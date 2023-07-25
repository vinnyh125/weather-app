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

export default function Weather() {
  return (
    <>
      <div id="app-background">
        <div id="weather-content">
          {cityName}, {countryName}<br /> 
          {conditionText}<br />
          <img src={conditionImage} alt={conditionText}></img><br />
          Celsius: {tempCel}°C, Fahrenheit: {tempFahr}°F
        </div>
      </div>
    </>
  );
}
