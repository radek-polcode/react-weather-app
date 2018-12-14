import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css';
import OverallInfo from './OverallInfo';
import DetailedInfo from './DetailedInfo';
import DailyChart from './DailyChart';
import json_data from '../../containers/data.js';
export default class extends Component {
  state = {}

  static propTypes = { }

  static defaultProps = { }

  constructor(props) {
    super();
  }

  render() {
    const cityInfo = json_data['data']['city']['city_info']
    // will be dynamic
    const currentDay = json_data['data']['city']['current_day']
    // will be dynamic when additional data about wind and humidity will be provided
    const currentWeather = json_data['data']['city']['weather']
    // will be dynamic
    const currentDayWeather = json_data['data']['city']['weekly_forecast'][currentDay]

    return(
      <div>
        <OverallInfo 
          cityInfo={cityInfo}
          currentDay={currentDay}
          currentDayWeather={currentDayWeather}
        />
        <DetailedInfo />
        <DailyChart />
      </div>
    )
  }
}