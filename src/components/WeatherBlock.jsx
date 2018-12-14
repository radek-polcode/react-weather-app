import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'reactstrap';

import './WeatherBlock.css';
import json_data from '../containers/data.js';
import DailyWeatherBlock from './DailyWeatherBlock';
import WeeklyWeatherList from './WeeklyWeatherList';

export default class WeatherBlock extends Component {
  state = { weather_data: json_data }

  static propTypes = {}
  static defaultProps = {}

  constructor(props) {
    super();
  }

  render() {
    const overall_info = json_data['data']['city']
    return(
      <div className="weather-block">
        <DailyWeatherBlock />
        <WeeklyWeatherList />
      </div>
    )
  }
}