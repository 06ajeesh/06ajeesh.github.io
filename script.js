const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fe442f31c0msh1ab0e3757f17a4dp125091jsnaea9194154f4",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //cloud_pct.innerHTML=response.cloud_pct
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Delhi");

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    Tokyo1.innerHTML = response.temp;
    Tokyo2.innerHTML = response.feels_like;
    Tokyo3.innerHTML = response.humidity;
    Tokyo4.innerHTML = response.min_temp;
    Tokyo5.innerHTML = response.max_temp;
    Tokyo6.innerHTML = response.wind_speed;
    Tokyo7.innerHTML = response.wind_degrees;
    Tokyo8.innerHTML = response.sunrise;
    Tokyo9.innerHTML = response.sunset;
  });

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New york",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    Newyork1.innerHTML = response.temp;
    Newyork2.innerHTML = response.feels_like;
    Newyork3.innerHTML = response.humidity;
    Newyork4.innerHTML = response.min_temp;
    Newyork5.innerHTML = response.max_temp;
    Newyork6.innerHTML = response.wind_speed;
    Newyork7.innerHTML = response.wind_degrees;
    Newyork8.innerHTML = response.sunrise;
    Newyork9.innerHTML = response.sunset;
  });
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      boston1.innerHTML = response.temp;
      boston2.innerHTML = response.feels_like;
      boston3.innerHTML = response.humidity;
      boston4.innerHTML = response.min_temp;
      boston5.innerHTML = response.max_temp;
      boston6.innerHTML = response.wind_speed;
      boston7.innerHTML = response.wind_degrees;
      boston8.innerHTML = response.sunrise;
      boston9.innerHTML = response.sunset;
    });

