import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css';
import OverallInfo from './OverallInfo';
import DetailedInfo from './DetailedInfo';
import DailyChart from './DailyChart';
import WeatherDataParser from '../../services/WeatherDataParser';

export default class extends Component {
  static propTypes = {
    weatherData: PropTypes.object.isRequired,
    currentDay: PropTypes.string.isRequired,
    //api
    overallCityInfo: PropTypes.object.isRequired,
    currentDateTimeWeather: PropTypes.object.isRequired,
    selectedDayForecast: PropTypes.object.isRequired
  }

  static defaultProps = {
    weatherData: {},
    currentDay: '',
    //api props
    overallCityInfo: {},
    currentDateTimeWeather: {},
    selectedDayForecast: {}
  }

  render() {
    let weatherData = this.props.weatherData
    let currentDay = this.props.currentDay
    let currentDayWeather = weatherData['city']['weekly_forecast'][currentDay]

    //api
    let currentDateTimeWeather = this.props.currentDateTimeWeather
    let description = { 
      weatherMain: currentDateTimeWeather['weatherMain'],
      weatherDescription: currentDateTimeWeather['weatherDescription']
    }
    let overallCityInfo = this.props.overallCityInfo
    let selectedDateWeather = WeatherDataParser.prepareDataForChart(this.props.selectedDayForecast.hourlyForecast)

    return(
      <div>
        <OverallInfo 
          cityInfo={overallCityInfo}
          currentDay={currentDay}
          currentDayWeather={currentDayWeather}
          description={description}
        />
        <DetailedInfo 
          currentDayWeather={currentDayWeather}
          currentDateTimeWeather={currentDateTimeWeather}
        />
        <DailyChart 
          currentDayWeather={currentDayWeather} 
          currentDateTimeWeather={currentDateTimeWeather}
          selectedDateWeather={selectedDateWeather}
        />
      </div>
    )
  }
}