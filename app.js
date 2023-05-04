
const temp = document.getElementById('temp')
const main = document.getElementById('main')
const name = document.getElementById('name')
const icon = document.getElementById('icon')
const humidity = document.getElementById('humidity')
const pressure = document.getElementById('pressure')
const wind_speed = document.getElementById('wind_speed')
const temp_max = document.getElementById('temp_max')
const temp_min = document.getElementById('temp_min')
const country = document.getElementById('country')
const sunrise = document.getElementById('sunrise')
const sunset = document.getElementById('sunset')




// const temp = document.getElementById('temp')




const success2 = (position) => {
    var Latitudes = position.coords.latitude;
    var Longitudes = position.coords.longitude;

    // console.log(Latitudes, "and ", Longitudes)

    const WEATHER_API_KEY = '1da9c0d44fe709c31a5e057da7dc4ba6'
    const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Latitudes}&lon=${Longitudes}&appid=${WEATHER_API_KEY}&units=metric`

    const getWeatherData = async () => {
        const res = await fetch(WEATHER_API)
        const data = await res.json()
        console.log(data)

        const ogTemp = data.main.temp
        temp.innerHTML = ogTemp.toFixed() + 'c'
        main.innerHTML = data.weather[0].main
        name.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity
        pressure.innerHTML = data.main.pressure
        wind_speed.innerHTML = data.wind.speed
        icon.innerHTML = ` <img class="icon" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather img">`
        temp_max.innerHTML = 'max' + "  " + data.main.temp_max.toFixed() + 'c'
        temp_min.innerHTML = 'min' + "  " + data.main.temp_min.toFixed() + 'c'
        country.innerHTML = data.sys.country;


       
        const sunriseData =
            (new Date(data.sys.sunrise)).toLocaleTimeString()
        sunrise.innerHTML = sunriseData


        const sunsetData =
            (new Date(data.sys.sunset)).toLocaleTimeString()
        sunset.innerHTML = sunsetData
        console.log(data.sys.sunset)

 

        console.log(data.weather[0].icon)

    }
    getWeatherData()
}
const error2 = () => {
    console.error('error')
}

const getWeatherData = () => navigator.geolocation.getCurrentPosition(success2, error2)

getWeatherData()
 