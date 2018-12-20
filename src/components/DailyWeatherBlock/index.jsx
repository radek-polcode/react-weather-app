import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css';
import OverallInfo from './OverallInfo';
import DetailedInfo from './DetailedInfo';
import DailyChart from './DailyChart';
export default class extends Component {
  static propTypes = {
    weatherData: PropTypes.object.isRequired,
    currentDay: PropTypes.string.isRequired
  }

  static defaultProps = {
    weatherData: {},
    currentDay: ''
  }

  render() {
    let weatherData = this.props.weatherData
    const cityInfo = weatherData['city']['city_info']
    
    let currentDay = this.props.currentDay
    
    let currentDayWeather = weatherData['city']['weekly_forecast'][currentDay]
    return(
      <div>
        <OverallInfo 
          cityInfo={cityInfo}
          currentDay={currentDay}
          currentDayWeather={currentDayWeather}
        />
        <DetailedInfo currentDayWeather={currentDayWeather} />
        <DailyChart currentDayWeather={currentDayWeather} />
      </div>
    )
  }
}