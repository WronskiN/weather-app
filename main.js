const api = {
  // Please use your own key code for API from https://openweathermap.org/. THANKS ! 
  key: "c503793adc35a6ed83b3bae6da90ce9c",
  baseURL: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search__box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(event) {
  if (event.keyCode == 13) {
    // console.log(searchBox.value);
    getResults(searchBox.value);
  }
}


function getResults(query) {
  fetch(`${api.baseURL}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(weather => weather.json())
  .then(displayResult)
  
  setTimeout(() => searchBox.value = '', 1000)
}

function displayResult(weather) {
  
  let city = document.querySelector('.city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weatherName = document.querySelector('.weather');
  weatherName.innerText = `${weather.weather[0].main}`;

  let hiLow = document.querySelector('.hi-low');
  hiLow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`
}



function dateBuilder(d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}























// function setQuery(evt) {
//   if (evt.keyCode == 13) {
//     getResults(searchBox.value);
//   }
// };

// function getResults(query) {
//   console.log(fetch(`${api.baseURL}weather?q=${query}&units=metric&APPID=${api.key}`));
//   fetch(`${api.baseURL}weather?q=${query}&units=metric&APPID=${api.key}`)
//     .then((weather) => {
//       return weather.json();
//     }).then(displayResults)
// }

// function displayResults(weather) {
//   // console.log(weather);
//   let city = document.querySelector('.city');
//   city.innerText = `${weather.name}, ${weather.sys.country}`;

//   let now = new Date();
//   let date = document.querySelector('.date');
//   date.innerText = dateBuilder(now);

//   let temp = document.querySelector('.temp');
//   temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

//   let weatherEl = document.querySelector('.weather');
//   weatherEl.innerText = weather.weather[0].main;

//   let hilow = document.querySelector('.hi-low');
//   hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
// }

// function dateBuilder(d) {
//   let months = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//   let day = days[d.getDay()];
//   let date = d.getDate();
//   let month = months[d.getMonth()];
//   let year = d.getFullYear();

//   return `${day} ${date} ${month} ${year}`;
// }