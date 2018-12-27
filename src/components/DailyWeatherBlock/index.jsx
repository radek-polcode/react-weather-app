import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css';
import OverallInfo from './OverallInfo';
import DetailedInfo from './DetailedInfo';
import DailyChart from './DailyChart';
export default class extends Component {
  static propTypes = {
    weatherData: PropTypes.object.isRequired,
    currentDay: PropTypes.string.isRequired,
    //api
    overallCityInfo: PropTypes.object.isRequired,
    currentDateTimeWeather: PropTypes.object.isRequired
  }

  static defaultProps = {
    weatherData: {},
    currentDay: '',
    //api props
    overallCityInfo: {},
    currentDateTimeWeather: {}
  }

  render() {
    let weatherData = this.props.weatherData
    let currentDay = this.props.currentDay
    let currentDayWeather = weatherData['city']['weekly_forecast'][currentDay]

    //api
    const overallCityInfo = this.props.overallCityInfo
    const currentDateTimeWeather = this.props.currentDateTimeWeather
    const description = { 
      weatherMain: currentDateTimeWeather['weatherMain'],
      weatherDescription: currentDateTimeWeather['weatherDescription']
    }

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
        <DailyChart currentDayWeather={currentDayWeather} />
      </div>
    )
  }
}