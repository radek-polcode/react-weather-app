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
  },

  getFiveDaysForecast: function(fiveDayForecastArray) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let forecast = {}
    let previousDay = ''

    fiveDayForecastArray.forEach(dailyForecast => {
      let currentDateTime = new Date(dailyForecast.dt * 1000)
      let currentDate = currentDateTime.getDate()
      let currentDay = currentDateTime.getDay()
      let currentDayName = days[currentDay]

      if (currentDate !== previousDay) {
        forecast[currentDayName] = {'hourlyForecast': [dailyForecast]}
        forecast[currentDayName]['day'] = days[currentDay]
      } else {
        forecast[currentDayName]['hourlyForecast'].push(dailyForecast)
      }
      previousDay = currentDate
    })
    return forecast;
  }
}

export default WeatherDataParser