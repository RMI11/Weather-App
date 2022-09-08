let timeEl = document.getElementById("time");
let dateEl = document.getElementById("date");
let currentWeatherItemsEl = document.getElementById("currentWeatherItems");
let timeZone = document.getElementById("timeZone");
let countryEl = document.getElementById("country");
let weatherForcastEl = document.getElementById("weatherForcast");
let currentTempEl = document.getElementById("currentTemp");

let days = ['Sunday', 'Monday','Thuesday','Wednesday','Thursday','Friday','Saturday'];
let months = ['Jan','Feb','Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c59bed04aemsh2246bce674c0fd4p109af7jsne7d1fddc1154',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

setInterval(() => {
    let time = new Date();
    let month = time.getMonth();
    let date = time.getDate();
    let day = time.getDay();
    let hour = time.getHours() ;
    let hoursIn12HrFormat = hour >= 13 ? hour %12 : hour;
    let minutes = time.getMinutes();
    let ampm = hour >= 12 ? 'PM' : 'AM';

    timeEl.innerHTML = minutes < 10 ? `${hoursIn12HrFormat} : 0${minutes} ${ampm}` : `${hoursIn12HrFormat} : ${minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${date} ${months[month]}`

}, 1000);

getWeatherData()
function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {

        let {latitude, longitude} = success.coords;

        fetch(`https://yahoo-weather5.p.rapidapi.com/weather?lat=${latitude}&long=${longitude}&format=json&u=c`, options)
	.then(response => response.json())
	.then(response => showWeatherData(response))
	.catch(err => console.error(err));
    });
}

let cHumidity = document.getElementById('cHum');
let cPressure = document.getElementById('cPress');
let cWSpeed = document.getElementById('cWSpeed')
let condition1 = document.getElementById('cCondition')
let hi0day = document.getElementById('0HiTemp');
let lo0day = document.getElementById('0LoTemp');
let hi1day = document.getElementById('1HiTemp');
let lo1day = document.getElementById('1LoTemp');
let hi2day = document.getElementById('2HiTemp');
let lo2day = document.getElementById('2LoTemp');
let hi3day = document.getElementById('3HiTemp');
let lo3day = document.getElementById('3LoTemp');
let hi4day = document.getElementById('4HiTemp');
let lo4day = document.getElementById('4LoTemp');
let hi5day = document.getElementById('5HiTemp');
let lo5day = document.getElementById('5LoTemp');
let hi6day = document.getElementById('6HiTemp');
let lo6day = document.getElementById('6LoTemp');
let day0 = document.querySelector('.day0');
let day1 = document.querySelector('.day1');
let day2 = document.querySelector('.day2');
let day3 = document.querySelector('.day3');
let day4 = document.querySelector('.day4');
let day5 = document.querySelector('.day5');
let day6 = document.querySelector('.day6');

function showWeatherData(response) {
    let {astronomy, atmosphere, condition, wind} = response.current_observation;
    let {city, country, region, timezone_id} = response.location;


    cHumidity.innerHTML = atmosphere.humidity;
    cPressure.innerHTML = atmosphere.pressure;
    cWSpeed.innerHTML = wind.speed;
    condition1.innerHTML = condition.text
    
    timeZone.innerHTML = `${country}/${city}`
    countryEl.innerHTML = `${timezone_id}`

    day0.innerHTML = `${response.forecasts[0].day}` 
    day1.innerHTML = `${response.forecasts[1].day}`
    day2.innerHTML = `${response.forecasts[2].day}`
    day3.innerHTML = `${response.forecasts[3].day}`
    day4.innerHTML = `${response.forecasts[4].day}`
    day5.innerHTML = `${response.forecasts[5].day}`
    day6.innerHTML = `${response.forecasts[6].day}`

    hi0day.innerHTML = `High - ${response.forecasts[0].high}&#176; C`
    lo0day.innerHTML = `Low - ${response.forecasts[0].low}&#176; C`
    hi1day.innerHTML = `High - ${response.forecasts[1].high}&#176; C`
    lo1day.innerHTML = `Low - ${response.forecasts[1].low}&#176; C`
    hi2day.innerHTML = `High - ${response.forecasts[2].high}&#176; C`
    lo2day.innerHTML = `Low - ${response.forecasts[2].low}&#176; C`
    hi3day.innerHTML = `High - ${response.forecasts[3].high}&#176; C`
    lo3day.innerHTML = `Low - ${response.forecasts[3].low}&#176; C`
    hi4day.innerHTML = `High - ${response.forecasts[4].high}&#176; C`
    lo4day.innerHTML = `Low - ${response.forecasts[4].low}&#176; C`
    hi5day.innerHTML = `High - ${response.forecasts[5].high}&#176; C`
    lo5day.innerHTML = `Low - ${response.forecasts[5].low}&#176; C`
    hi6day.innerHTML = `High - ${response.forecasts[6].high}&#176; C`
    lo6day.innerHTML = `Low - ${response.forecasts[6].low}&#176; C`
}