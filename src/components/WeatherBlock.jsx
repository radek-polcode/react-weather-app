import React, { Component } from 'react'
import axios from 'axios';

import './WeatherBlock.css';
import DailyWeatherBlock from './DailyWeatherBlock';
import WeatherDataParser from '../services/WeatherDataParser';
import WeeklyWeatherList from './WeeklyWeatherList';
import CityListJson from '../containers/city.list.min.json'

export default class WeatherBlock extends Component {
  state = {
    city: 'Barcelona',
    currentDateTime: new Date().getTime(),
    overallCityInfo: {},
    currentDateTimeWeather: {},
    fiveDaysForecast: {},
  }

  static propTypes = {}
  static defaultProps = {}
  
  componentDidMount() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const forecast5 = 'https://api.openweathermap.org/data/2.5/forecast?id='
    const barcelonaId = '6356055'
    const units = '&units=metric'
    const apiKey = 'a23d2967a22cfa9a510a2c630aa76206'
    console.log(CityListJson.find(city => city.name === 'Barcelona'))
    let currentDay = new Date(this.state.currentDateTime).getDay()
    let dayName = days[currentDay]
    axios
      .get(forecast5 + barcelonaId + "&APPID=" + apiKey + units)
      .then(response => {
        let apiWeatherData = response.data
        let overallCityInfo = WeatherDataParser.getCityOverallInfo(apiWeatherData)
        let fiveDaysForecast = WeatherDataParser.getFiveDaysForecast(
                                                  apiWeatherData.list
                                                )
        let currentDateTimeWeather = fiveDaysForecast[dayName]
        this.setState(
          { 
            apiWeatherData: apiWeatherData,
            overallCityInfo: overallCityInfo,
            currentDateTimeWeather: currentDateTimeWeather,
            fiveDaysForecast: fiveDaysForecast,
            currentDay: days[currentDay]
          }
        )
      })
      .catch(error => console.log(error));     
  }

  setCurrentDay = (selectedDay) => {
    this.setState({
      currentDay: selectedDay,
      currentDateTimeWeather: this.state.fiveDaysForecast[selectedDay]
    })
  }

  render() {
    let currentDay = this.state.currentDay
    //api data
    const fiveDaysForecast = this.state.fiveDaysForecast
    const overallCityInfo = this.state.overallCityInfo
    const currentDateTimeWeather = this.state.currentDateTimeWeather
    return(
      <div className="weather-block">
        <DailyWeatherBlock 
          currentDay={currentDay}
          overallCityInfo={overallCityInfo}
          currentDateTimeWeather={currentDateTimeWeather}
          selectedDayForecast={fiveDaysForecast[currentDay]}
        />
        <WeeklyWeatherList 
          currentDay={currentDay}
          setCurrentDay={this.setCurrentDay}
          //api
          fiveDaysForecast={this.state.fiveDaysForecast}
        />
      </div>
    )
  }
}