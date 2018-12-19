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

  handleOnClick() {
    const onSelect = this.props.onSelect
    const index = this.props.blockIndex
    onSelect(index)
  }

  render() {
    const blockClass = 'singleDayBlock'
    const dayName = this.props.dayName
    const isActive = this.props.isActive
    const weatherDescription = this.props.dayilyWeatherInfo['description']
    return (
      <div className={isActive ? blockClass + ' active' : blockClass}
            onClick={this.handleOnClick.bind(this)}>
        <div className="singleDayBlock__dayName">
          <span className="">
            {capitalizeText(dayName.substr(0, 3))}
          </span>
        </div>
        <img src={createImageUrl(48, weatherDescription)} 
            className="singleDayBlock__image"/>
        <span className="singleDayBlock__temp singleDayBlock--dayTemp">15&deg;</span>
        <span className="singleDayBlock__temp singleDayBlock--nightTemp">8&deg;</span>
      </div>
    )
  }
}