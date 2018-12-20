const WeatherDataParser = {
  getCityOverallInfo: function(jsonData) {
    return {
      "name": jsonData.city.name,
      "country": jsonData.city.country
    }
  },

  getCurrentTimeDailyWeather: function(jsonData, currentTime) {
    let currentDayWeather = this.getHourlyWeatherForCurrentDay(jsonData, currentTime)

    console.log(currentDayWeather)

    return {
      "description": '',
      "humidity": '',
      "pressure": '',
      "temperature": '',
      "wind": ''
    }
  },

  getHourlyWeatherForCurrentDay: function(jsonData, currentTime) {
    let today = new Date(currentTime).getDate()
    let hourlyWeather = jsonData.list
    const filteredForecast = hourlyWeather.filter(el => {
      let forecastTimeDay = new Date(el.dt * 1000).getDate()
      if (today === forecastTimeDay) {
        return el
      }
    })

    return filteredForecast
  }
}

export default WeatherDataParser