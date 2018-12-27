const WeatherDataParser = {
  getCityOverallInfo: function(jsonData) {
    return {
      "name": jsonData.city.name,
      "country": jsonData.city.country
    }
  },

  getCurrentTimeDailyWeather: function(jsonData, currentTime) {
    let currentDayWeather = this.getHourlyWeatherForCurrentDay(jsonData, currentTime)

    let weather = {
      "humidity": currentDayWeather[0]['main']['humidity'],
      "pressure": currentDayWeather[0]['main']['pressure'],
      "temperature": Math.round(currentDayWeather[0]['main']['temp']),
      "wind": currentDayWeather[0]['wind']['speed'],
      "weatherMain": currentDayWeather[0]['weather'][0]['main'],
      "weatherDescription": currentDayWeather[0]['weather'][0]['description'],
    }

    return weather;
  },

  getHourlyWeatherForCurrentDay: function(jsonData, currentTime) {
    let today = new Date(currentTime).getDate()
    let hourlyWeather = jsonData.list
    const filteredForecast = hourlyWeather.filter(el => {
      let forecastDateTime = new Date(el.dt * 1000).getDate()
      if (today === forecastDateTime) {
        return el
      }
    })

    return filteredForecast
  }
}

export default WeatherDataParser