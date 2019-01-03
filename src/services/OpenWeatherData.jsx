import axios from 'axios';
import WeatherDataParser from '../services/WeatherDataParser'

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const forecast5link = 'https://api.openweathermap.org/data/2.5/forecast?id='
const apiKey = 'a23d2967a22cfa9a510a2c630aa76206'
const units = '&units=metric'

const OpenWeatherData = {
  getWeatherData(cityId, currentDay) {
    let weatherData = {}
    let dayName = days[currentDay]
    axios
      .get(forecast5link + cityId + "&APPID=" + apiKey + units)
      .then(response => {
        let apiWeatherData = response.data
        let overallCityInfo = WeatherDataParser.getCityOverallInfo(apiWeatherData)
        let fiveDaysForecast = WeatherDataParser.getFiveDaysForecast(
                                                  apiWeatherData.list
                                                )
        let currentDateTimeWeather = fiveDaysForecast[dayName]

        weatherData = {
          apiWeatherData: apiWeatherData,
          overallCityInfo: overallCityInfo,
          currentDateTimeWeather: currentDateTimeWeather,
          fiveDaysForecast: fiveDaysForecast,
          currentDay: days[currentDay]
        }
      })
      .catch(error => console.log(error));
    return weatherData; 
  }
}

export default OpenWeatherData