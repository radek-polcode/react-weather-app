import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

import './WeatherBlock.css';
import jsonData from '../containers/data.js';
import DailyWeatherBlock from './DailyWeatherBlock';
import WeatherDataParser from '../services/WeatherDataParser';
import WeeklyWeatherList from './WeeklyWeatherList';

export default class WeatherBlock extends Component {
  state = {
    //api
    currentDateTime: new Date().getTime(),
    overallCityInfo: {},
    currentDateTimeWeather: {},
    fiveDaysForecast: {},
    //nonapi
    weatherData: jsonData,
    currentDay: jsonData['data']['city']['current_day'],
    currentDayApi: ''
  }

  static propTypes = {}
  static defaultProps = {}
  
  componentDidMount() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const forecast5 = 'http://api.openweathermap.org/data/2.5/forecast?id='
    const barcelonaId = '6356055'
    const barcelonaId2 = '3128760'
    const units = '&units=metric'
    const apiKey = 'a23d2967a22cfa9a510a2c630aa76206'
    
    let currentDayApi = new Date(this.state.currentDateTime).getDay()
    
    axios
      .get(forecast5 + barcelonaId + "&APPID=" + apiKey + units)
      .then(response => {
        let apiWeatherData = response.data
        let currentDateTime = this.state.currentDateTime
        // api data
        let overallCityInfo = WeatherDataParser.getCityOverallInfo(apiWeatherData)
        let currentDateTimeWeather = WeatherDataParser.getCurrentTimeDailyWeather(
                                                      apiWeatherData,
                                                      currentDateTime
                                                    )
        let fiveDaysForecast = WeatherDataParser.getFiveDaysForecast(
                                                  apiWeatherData.list
                                                )
        this.setState(
          { 
            overallCityInfo: overallCityInfo,
            currentDateTimeWeather: currentDateTimeWeather,
            fiveDaysForecast: fiveDaysForecast,
            currentDayApi: days[currentDayApi]
          }
        )
      })
      .catch(error => console.log(error));     
  }

  setCurrentDay = (selectedDay) => {
    this.setState({
      currentDay: selectedDay
    })
  }

  render() {
    const weatherData = this.state.weatherData['data']
    const weeklyForecast = this.state.weatherData['data']['city']['weekly_forecast']
    let currentDay = this.state.currentDay
    let currentDayApi = this.state.currentDayApi
    //api data
    const fiveDaysForecast = this.state.fiveDaysForecast
    const overallCityInfo = this.state.overallCityInfo
    const currentDateTimeWeather = this.state.currentDateTimeWeather
    return(
      <div className="weather-block">
        <DailyWeatherBlock 
          weatherData={weatherData}
          currentDay={currentDay}
          overallCityInfo={overallCityInfo}
          currentDateTimeWeather={currentDateTimeWeather}
          selectedDayForecast={fiveDaysForecast[currentDayApi]}
        />
        <WeeklyWeatherList 
          weeklyForecast={weeklyForecast}
          currentDay={currentDay}
          setCurrentDay={this.setCurrentDay}
          //api
          fiveDaysForecast={this.state.fiveDaysForecast}
        />
      </div>
    )
  }
}