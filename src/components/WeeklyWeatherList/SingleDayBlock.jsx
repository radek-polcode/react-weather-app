import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SingleDayBlock.css';
import { capitalizeText } from '../../utils/capitalizeText';
import { createImageUrl } from '../../utils/createImageUrl';

export default class SingleDayBlock extends Component {
  state = {
    clicked: false,
    dayilyWeatherInfo: this.props.dayilyWeatherInfo,
    dayName: this.props.dayName
  }

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

  handleOnClick = () => {
    this.setState(
      prevState => ({clicked: !prevState.clicked})
    )
  }

  render() {
    const weatherDescription = this.state.dayilyWeatherInfo['description']
    const blockClass = 'singleDayBlock'
    return (
      <div className={this.state.clicked ? blockClass + ' active' : blockClass}
            onClick={this.handleOnClick}>
        <div className="singleDayBlock__dayName">
          <span>
            {capitalizeText(this.state.dayName.substr(0, 3))}
          </span>
        </div>
        <img src={createImageUrl(48, weatherDescription)} 
            className="sigleDayBlock__image"/>
        <span className="sigleDayBlock__temp sigleDayBlock--dayTemp">15&deg;</span>
        <span className="sigleDayBlock__temp sigleDayBlock--nightTemp">8&deg;</span>
      </div>
    )
  }
}