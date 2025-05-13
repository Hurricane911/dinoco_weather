const apiKey = "2fc42fbcede84db63e53dab833adce27";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    } else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }

    const data = await response.json();

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

	if(data.weather[0].main == "Clouds"){
		WeatherIcon.src = "img/clouds.png";
	}
	else if(data.weather[0].main == "Clear"){
		WeatherIcon.src = "img/clear.png";
	}
	else if(data.weather[0].main == "Rain"){
		WeatherIcon.src = "img/rain.png";
	}
	else if(data.weather[0].main == "Drizzle"){
		WeatherIcon.src = "img/drizzle.png";
	}
	else if(data.weather[0].main == "Mist"){
		WeatherIcon.src = "images/mist.png";
	}
	
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});