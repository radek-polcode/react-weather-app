import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './WeatherBlock.css';
import jsonData from '../containers/data.js';
import DailyWeatherBlock from './DailyWeatherBlock';
import WeeklyWeatherList from './WeeklyWeatherList';

export default class WeatherBlock extends Component {
  state = {
    apiData: [],
    weatherData: jsonData,
    currentDay: jsonData['data']['city']['current_day']
  }

  static propTypes = {}
  static defaultProps = {}

  componentDidMount() {
    fetch('www.api.com')
    .then(results => {
      return results.json();
    }).then(data => {
      let apiData = data.results.map((dat) => {
        return (
          dat
        )
      })
      this.setState({apiData: apiData})
      console.log(apiData)
    })
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