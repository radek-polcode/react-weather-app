import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './WeatherBlock.css';
import jsonData from '../containers/data.js';
import DailyWeatherBlock from './DailyWeatherBlock';
import WeeklyWeatherList from './WeeklyWeatherList';

export default class WeatherBlock extends Component {
  state = { weatherData: jsonData }

  static propTypes = {}
  static defaultProps = {}

  constructor(props) {
    super();
  }

  render() {
    const weeklyForecast = this.state.weatherData['data']['city']['weekly_forecast']
    return(
      <div className="weather-block">
        <DailyWeatherBlock />
        <WeeklyWeatherList weeklyForecast={weeklyForecast} />
      </div>
    )
  }
}