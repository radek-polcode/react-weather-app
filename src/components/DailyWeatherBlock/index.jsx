import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css';
import json_data from '../../containers/data.js';
import OverallInfo from './OverallInfo';

export default class extends Component {
  state = { weather_data: json_data }

  static propTypes = {}
  static defaultProps = {}

  constructor(props) {
    super();
  }

  render() {
    const overall_info = json_data['data']['city']
    return(
      <div>
        <OverallInfo />
      </div>
    )
  }
}