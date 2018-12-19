import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css';
import OverallInfo from './OverallInfo';
import DetailedInfo from './DetailedInfo';
import DailyChart from './DailyChart';
export default class extends Component {
  state = { weatherData: this.props.weatherData }
  
  static propTypes = {
    weatherData: PropTypes.object.isRequired
  }

  static defaultProps = {
    weatherData: {}
  }

  render() {
    const weatherData = this.state.weatherData
    const cityInfo = weatherData['city']['city_info']
    // will be dynamic
    const currentDay = weatherData['city']['current_day']
    // will be dynamic
    const currentDayWeather = weatherData['city']['weekly_forecast'][currentDay]

    return(
      <div>
        <OverallInfo 
          cityInfo={cityInfo}
          currentDay={currentDay}
          currentDayWeather={currentDayWeather}
        />
        <DetailedInfo currentDayWeather={currentDayWeather} />
        <DailyChart />
      </div>
    )
  }
}