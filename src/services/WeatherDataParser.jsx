const WeatherDataParser = {
  getCityOverallInfo: function(jsonData) {
    return {
      "name": jsonData.city.name,
      "country": jsonData.city.country
    }
  },

  getCurrentTimeDailyWeather: function(hourlyArrays) {
    if (hourlyArrays === undefined) {
      return {}
    }
    
    let weather = {
      "imgCode": hourlyArrays[0]['weather'][0]['icon'],
      "humidity": hourlyArrays[0]['main']['humidity'],
      "pressure": hourlyArrays[0]['main']['pressure'],
      "temperature": Math.round(hourlyArrays[0]['main']['temp']),
      "wind": hourlyArrays[0]['wind']['speed'],
      "weatherMain": hourlyArrays[0]['weather'][0]['main'],
      "weatherDescription": hourlyArrays[0]['weather'][0]['description'],
    }

    return weather;
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
  },

  getMinAndMaxTemperatureForPassedDay: function(hourlyArrays) {
    let dailyTemperatures = hourlyArrays.map(el => {
      return Math.round(el.main.temp)
    })

    let minAndMaxtemperature = {
      'min': Math.min(...dailyTemperatures),
      'max': Math.max(...dailyTemperatures),
    }
    
    return minAndMaxtemperature
  },

  prepareDataForChart: function(activeButtonChart, hourlyArrays = []) {
    switch (activeButtonChart) {
      case 'temperatureButton': 
        let hourlyTemperatures = [] 
        hourlyArrays.forEach(el => {
          let hour = new Date(el.dt * 1000).getHours()
          hourlyTemperatures.push({
            'hour': hour,
            'value': Math.round(el.main.temp)
          })
        })
        return hourlyTemperatures
      case 'pressureButton': 
        let hourlyPressure = [] 
        hourlyArrays.forEach(el => {
          let hour = new Date(el.dt * 1000).getHours()
          hourlyPressure.push({
            'hour': hour,
            'value': el.main.pressure
          })
        })
        return hourlyPressure
      case 'windButton': 
        let hourlyWind = [] 
        hourlyArrays.forEach(el => {
          let hour = new Date(el.dt * 1000).getHours()
          hourlyWind.push({
            'hour': hour,
            'value': el.wind.speed
          })
        })
        return hourlyWind
      default:
        return {}
    }
  }
}

export default WeatherDataParser