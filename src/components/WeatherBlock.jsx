import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './WeatherBlock.css';
import jsonData from '../containers/data.js';
import DailyWeatherBlock from './DailyWeatherBlock';
import WeeklyWeatherList from './WeeklyWeatherList';

export default class WeatherBlock extends Component {
  state = { 
    weatherData: jsonData,
    currentDay: jsonData['data']['city']['current_day']
  }

  static propTypes = {}
  static defaultProps = {}

  setCurrentDay = (selectedDay) => {
    this.setState({
      currentDay: selectedDay
    })
  }

  constructor(props) {
    super();
  }

  render() {
    const weatherData = this.state.weatherData['data']
    const weeklyForecast = this.state.weatherData['data']['city']['weekly_forecast']
    let currentDay = this.state.currentDay

    return(
      <div className="weather-block">
        <DailyWeatherBlock 
          weatherData={weatherData}
          currentDay={currentDay}
        />
        <WeeklyWeatherList 
          weeklyForecast={weeklyForecast}
          currentDay={currentDay}
          setCurrentDay={this.setCurrentDay}
        />
      </div>
    )
  }
}