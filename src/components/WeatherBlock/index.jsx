import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css';
import json_data from '../../containers/data.js';

export default class extends Component {
  state = { weather_data: json_data }

  static propTypes = {}
  static defaultProps = {}

  constructor(props) {
    super();
  }

  render() {
    return(
      <div className="weather-block">
      </div>
    )
  }
}