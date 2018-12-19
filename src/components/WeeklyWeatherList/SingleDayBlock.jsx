import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SingleDayBlock.css';
import { capitalizeText } from '../../utils/capitalizeText';
import { createImageUrl } from '../../utils/createImageUrl';

export default class SingleDayBlock extends Component {
  // Declare propTypes as static properties as early as possible
  static propTypes = {
    dayilyWeatherInfo: PropTypes.object.isRequired,
    dayName: PropTypes.string.isRequired
  }

  // Default props below propTypes
  static defaultProps = {
    dayilyWeatherInfo: {},
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
    const weatherDescription = this.props.dayilyWeatherInfo['description']
    const temperatures = this.props.dayilyWeatherInfo['temperature']['hourly']
    return (
      <div className={isActive ? blockClass + ' active' : blockClass}
            onClick={this.handleOnClick.bind(this, dayName)}>
        <div className="singleDayBlock__dayName">
          <span className="">
            {capitalizeText(dayName.substr(0, 3))}
          </span>
        </div>
        <img src={createImageUrl(48, weatherDescription)} 
            className="singleDayBlock__image"/>
        <span className="singleDayBlock__temp singleDayBlock--dayTemp">
          {Math.max(...temperatures)}&deg;
        </span>
        <span className="singleDayBlock__temp singleDayBlock--nightTemp">
          {Math.min(...temperatures)}&deg;
        </span>
      </div>
    )
  }
}