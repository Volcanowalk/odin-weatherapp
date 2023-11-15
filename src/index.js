import './style.css'

const btnSearch = document.querySelector('.search')
const inputLocation = document.querySelector('.weather-location')
const div_display = document.querySelector('.display-weather')

btnSearch.addEventListener('click', async function() {
    const weather = await getWeather(inputLocation.value)
    if(weather) { 
        displayWeather(weather)
        div_display.style.visibility = 'visible'
    } else {
        div_display.style.visibility = 'hidden'
    }
})

async function displayWeather(weather) {
    const city = document.querySelector('.city')
    const country = document.querySelector('.country')
    const icon = document.querySelector('.condition-icon')
    const txtCondition = document.querySelector('.condition-text')
    const temp_c = document.querySelector('.temp-c')
    const temp_f = document.querySelector('.temp-f')
    const feelslike_c = document.querySelector('.feelslike-c')
    const feelslike_f = document.querySelector('.feelslike-f')
    const wind = document.querySelector('.wind')
    const humidity = document.querySelector('.humidity')
    const precip = document.querySelector('.precipitation')

    city.textContent = weather.location_name
    country.textContent = weather.location_country
    icon.src = `https:${weather.icon}`
    txtCondition.textContent = weather.condition
    temp_c.textContent = weather.temp_c
    temp_f.textContent = weather.temp_f
    feelslike_c.textContent = weather.feelslike_c
    feelslike_f.textContent = weather.feelslike_f
    wind.textContent = `${weather.wind_kph} km/h`
    humidity.textContent = `${weather.humidity}%`
    precip.textContent = `${weather.precip_mm} mm`
}

async function getWeather(location){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=f2059bfb35224f35b34161322231311&q=${location}`, { mode: 'cors' })

    if(response.status === 400) {
        alert('Please type a proper city name')
    } else {
        const data = await response.json()
        const currentWeather = data.current
        const weatherLocation = data.location

        return createWeather(currentWeather.condition.text, currentWeather.condition.icon, currentWeather.temp_c, currentWeather.temp_f, currentWeather.feelslike_c, currentWeather.feelslike_f, currentWeather.wind_kph, currentWeather.humidity, currentWeather.precip_mm, weatherLocation.name, weatherLocation.country)
    }
}

function createWeather(condition, icon, temp_c, temp_f, feelslike_c, feelslike_f, wind_kph, humidity, precip_mm, location_name, location_country) {

    return { condition, icon, temp_c, temp_f, feelslike_c, feelslike_f, wind_kph, humidity, precip_mm, location_name, location_country }
}