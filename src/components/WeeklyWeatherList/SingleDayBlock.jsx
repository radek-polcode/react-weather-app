import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SingleDayBlock.css';
import { capitalizeText } from '../../utils/capitalizeText';
import { createImageUrl } from '../../utils/createImageUrl';
import WeatherDataParser from '../../services/WeatherDataParser';

export default class SingleDayBlock extends Component {
  // Declare propTypes as static properties as early as possible
  static propTypes = {
    dailyWeatherInfo: PropTypes.object.isRequired,
    dayName: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
  }

  // Default props below propTypes
  static defaultProps = {
    dailyWeatherInfo: {},
    dayName: ''
  }

  handleOnClick(dayName) {
    const onSelect = this.props.onSelect
    const index = this.props.blockIndex
    onSelect(index, dayName)
  }

  render() {
    const blockClass = 'singleDayBlock'
    const dayName = this.props.dayName
    const isActive = this.props.isActive

    //api
    const dailyWeatherInfo = this.props.dailyWeatherInfo
    const imgCode = dailyWeatherInfo.hourlyForecast[0].weather[0].icon
    const temperatures = WeatherDataParser.getTemperaturesForPassedDay(dailyWeatherInfo.hourlyForecast)

    return (
      <div className={isActive ? blockClass + ' active' : blockClass}
            onClick={this.handleOnClick.bind(this, dayName)}>
        <div className="singleDayBlock__dayName">
          <span className="">
            {capitalizeText(dayName.substr(0, 3))}
          </span>
        </div>
        <img src={createImageUrl(imgCode)} 
            className="singleDayBlock__image"/>
        <span className="singleDayBlock__temp singleDayBlock--dayTemp">
          {temperatures.max}&deg;
        </span>
        <span className="singleDayBlock__temp singleDayBlock--nightTemp">
          {temperatures.min}&deg;
        </span>
      </div>
    )
  }
}