const inputValue = document.getElementById("input")
const searchBtn = document.querySelector("#searchBtn")
const temperature = document.getElementById("temperature")
const description = document.getElementById("description")
const country = document.querySelector("#country") 
// console.log(country);
const humidityValue = document.getElementById("humidityValue")
const cityname = document.getElementById("name")
const windValue = document.getElementById("windValue")
const weatherImg = document.querySelector(".weatherImg")
const feelLikeValue = document.getElementById("feelLikeValue")
const feelLikeImg = document.querySelector(".feelLikeImg")

searchBtn.addEventListener('click', searchWeather)

function searchWeather(){
    getWeather(inputValue.value)
}

async function getWeather(city){
    const apiKey ="c83abac9e7749a79a2aef9dc271bdde4"
    const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((res) => res.json())
    inputValue.value = null

    temperature.innerHTML = `${Math.round(weatherData.main.temp -273.15 )}<sup>°C</sup>`
    description.innerHTML = `${weatherData.weather[0].description}`
    humidityValue.innerHTML = `${weatherData.main.humidity}%`
    windValue.innerHTML = `${weatherData.wind.speed} km/h`
    feelLikeValue.innerHTML = `${Math.round(weatherData.main.feels_like - 273.15 )}°`
    cityname.innerHTML = `${weatherData.name}`
    country.innerText = `(${weatherData.sys.country})`
    // console.log(country);
    console.log(weatherData);

    if(weatherData.weather[0].main === "Rain"){
        weatherImg.src = "picture/rain.png"
        feelLikeImg.src = "picture/rain.png"
    }else 
    if(weatherData.weather[0].main === "Clouds"){
        weatherImg.src = "picture/cloud.png"
        feelLikeImg.src = "picture/cloud.png"
    }else 
    if(weatherData.weather[0].main === "Mist"){
        weatherImg.src = "picture/mist.png"
        feelLikeImg.src = "picture/mist.png"
    }else 
    if(weatherData.weather[0].main === "Snow"){
        weatherImg.src = "picture/snow.png"
        feelLikeImg.src = "picture/snow.png"
    }else 
    if(weatherData.weather[0].main === "Smoke"){
        weatherImg.src = "picture/fog.png"
        feelLikeImg.src = "picture/fog.png"
    }else 
    if(weatherData.weather[0].main === "Clear"){
        weatherImg.src = "picture/clear.png"
        feelLikeImg.src = "picture/clear.png"
    }else 
    if(weatherData.weather[0].main === "Drizzle"){
        weatherImg.src = "picture/drizzle.png"
        feelLikeImg.src = "picture/drizzle.png"
    }
}

