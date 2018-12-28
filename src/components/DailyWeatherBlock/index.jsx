import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css';
import OverallInfo from './OverallInfo';
import DetailedInfo from './DetailedInfo';
import DailyChart from './DailyChart';
import WeatherDataParser from '../../services/WeatherDataParser';

export default class extends Component {
  static propTypes = {
    currentDay: PropTypes.string.isRequired,
    //api
    overallCityInfo: PropTypes.object.isRequired,
    currentDateTimeWeather: PropTypes.object.isRequired,
    selectedDayForecast: PropTypes.object.isRequired
  }

  static defaultProps = {
    currentDay: '',
    //api props
    overallCityInfo: {},
    currentDateTimeWeather: {},
    selectedDayForecast: {}
  }

  render() {
    let currentDay = this.props.currentDay

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
          description={description}
        />
        <DetailedInfo 
          currentDateTimeWeather={currentDateTimeWeather}
        />
        <DailyChart 
          currentDateTimeWeather={currentDateTimeWeather}
          selectedDateWeather={selectedDateWeather}
        />
      </div>
    )
  }
}