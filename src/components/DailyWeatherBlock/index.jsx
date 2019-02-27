import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DetailedInfo from './DetailedInfo';
import DailyChart from './DailyChart';
import OverallInfo from './OverallInfo';
import Search from '../Search';
import WeatherDataParser from '../../services/WeatherDataParser';

export default class extends Component {
  state = {
    activeButtonChart: 'temperatureButton'
  }

  static propTypes = {
    cityList: PropTypes.array.isRequired,
    currentDay: PropTypes.string.isRequired,
    overallCityInfo: PropTypes.object.isRequired,
    currentDateTimeWeather: PropTypes.object.isRequired,
    selectedDayForecast: PropTypes.object.isRequired,
    setCityId: PropTypes.func.isRequired
  }

  static defaultProps = {
    cityList: [],
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
    const cityList = this.props.cityList
    const activeButtonChart = this.state.activeButtonChart
    const currentDay = this.props.currentDay
    const currentDateTimeWeather = 
      WeatherDataParser.getCurrentTimeDailyWeather(
                          this.props.selectedDayForecast.hourlyForecast
                        )
    const description = { 
      weatherMain: currentDateTimeWeather['weatherMain'],
      weatherDescription: currentDateTimeWeather['weatherDescription']
    }
    const overallCityInfo = this.props.overallCityInfo
    const selectedDateChartData = 
      WeatherDataParser.prepareDataForChart(
                          activeButtonChart,
                          this.props.selectedDayForecast.hourlyForecast
                        )
    
    const setActiveButtonChart = this.setActiveButtonChart.bind(this)
    return(
      <div>
        <OverallInfo 
          cityInfo={overallCityInfo}
          currentDay={currentDay}
          description={description}
        />
        <Search
          cityList={cityList}
          setCityId={this.props.setCityId}
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