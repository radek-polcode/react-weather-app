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
    selectedDayForecast: PropTypes.object.isRequired,
    setCityId: PropTypes.func.isRequired
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
    let activeButtonChart = this.state.activeButtonChart
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
    let selectedDateChartData = 
      WeatherDataParser.prepareDataForChart(
                          activeButtonChart,
                          this.props.selectedDayForecast.hourlyForecast
                        )
    
    const setActiveButtonChart = this.setActiveButtonChart.bind(this)
    const setCityId = this.props.setCityId
    return(
      <div>
        <OverallInfo 
          cityInfo={overallCityInfo}
          currentDay={currentDay}
          description={description}
          setCityId={setCityId}
        />
        <DetailedInfo 
          currentDateTimeWeather={currentDateTimeWeather}
          onButtonClick={setActiveButtonChart}
          activeButtonChart={activeButtonChart}
        />
        <DailyChart 
          selectedDateWeather={selectedDateChartData}
          activeButtonChart={activeButtonChart}
        />
      </div>
    )
  }
}