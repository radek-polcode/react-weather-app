import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css';
import OverallInfo from './OverallInfo';
import DetailedInfo from './DetailedInfo';
import DailyChart from './DailyChart';
import WeatherDataParser from '../../services/WeatherDataParser';

export default class extends Component {
  state = {
    activeButtonChart: 'temperatureButton'
  }

  static propTypes = {
    currentDay: PropTypes.string.isRequired,
    overallCityInfo: PropTypes.object.isRequired,
    currentDateTimeWeather: PropTypes.object.isRequired,
    selectedDayForecast: PropTypes.object.isRequired
  }

  static defaultProps = {
    currentDay: '',
    overallCityInfo: {},
    currentDateTimeWeather: {},
    selectedDayForecast: {}
  }

  setActiveButtonChart(buttonName) {
    this.setState({
      activeButtonChart: buttonName,
    })
  }

  render() {
    let currentDay = this.props.currentDay
    let currentDateTimeWeather = 
      WeatherDataParser.getCurrentTimeDailyWeather(
                          this.props.selectedDayForecast.hourlyForecast
                        )
    let description = { 
      weatherMain: currentDateTimeWeather['weatherMain'],
      weatherDescription: currentDateTimeWeather['weatherDescription']
    }
    let overallCityInfo = this.props.overallCityInfo
    let selectedDateChartData = WeatherDataParser.prepareDataForChart(
                                                  this.props.selectedDayForecast.hourlyForecast
                                                )
    return(
      <div>
        <OverallInfo 
          cityInfo={overallCityInfo}
          currentDay={currentDay}
          description={description}
        />
        <DetailedInfo 
          currentDateTimeWeather={currentDateTimeWeather}
          onButtonClick={this.setActiveButtonChart}
        />
        <DailyChart 
          currentDateTimeWeather={currentDateTimeWeather}
          selectedDateWeather={selectedDateChartData}
        />
      </div>
    )
  }
}